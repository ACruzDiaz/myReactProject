import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CategoryContainer from './components/Categories/CategoryContainer/CategoryContainer'
import BagContainer from './components/bagMain/BagContainer/BagContainer'
import { useState, useEffect, useRef} from 'react'
import FormClientData from './components/Form/FormClientData'
import { firebaseConfig } from './fb_config'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, query, collection, updateDoc, getDoc, addDoc} from 'firebase/firestore/lite'
import { Toaster, toast } from 'sonner'

const app = initializeApp(firebaseConfig);
const fdb = getFirestore(app);


function App() {
  const [items, setItems] = useState([]);
  const [bagProducts, setBagProducts] = useState([]);
  const [bag, setBag] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  let copy = useRef();

  //Agregar Item a la bolsa
  const addToBag = (newProduct) =>{
    if(Object.keys(newProduct).length === 0){
      toast.warning("No hay productos que mostrar.");
    }
    else{
      setBagProducts(prevBagProducts => [...prevBagProducts, newProduct]);
      setItems(restaItems(items, newProduct));
    }
  }
  
  //Borrar Item de la bolsa
  const deleteFromBag = (product) => {
    setBagProducts(bagProducts.filter( products => products.id !== product.id));
    setItems(sumarItems(items, product));

  }
  //Vaciar la bolsa / Cancelar
  const dumpBag = () => {
    setItems(copy.current);
    setBagProducts([]);
    toast("Bolsa vaciada");
  }

  // Comprar
  const buyBag = (clientData, total) =>{
    const bagLite = bag.map(({producto, ...rest})=>{
      return rest
    })
    const order = {
      clientData,
      total,
      bag:bagLite
    }

    return Promise.all(
      items.map(async(item)=> {
        const productRef = await doc(fdb, "books", item.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock

        await updateDoc(productRef,{
          stock: item.stock
        });
      })
    ).then(()=>{
      addDoc(collection(fdb,"orders"), order)
      .then((docRef)=>{
        return loadData();
        
      })
      .then((res)=>{  
        
        setBagProducts([]);
        toast.success("Compra completada");
        return res;
      })
      .catch(()=>{
        toast.error("No se pudo completar la compra. Intente de nuevo.");
      });
    })
    .catch(()=>{
      toast.error("Error al colocar la orden. Intente de nuevo.");
    })

  }

  //Reavastecer productos
  const refillStock = () =>{

  }

  //CONTAR ITEMS TOTALES
  const countItems = 
      bag.reduce((acc, item) => {
      return acc = acc + item.quantity;
    },0) ;


  //Get total price

  const getTotal = (arrayItems) => {
    if(arrayItems && arrayItems.length >= 0){
      return arrayItems.reduce((acc, item)=> {
        acc = acc + item.quantity*item.producto.price;
        return acc;
      }, 0)
    }else{
      return 0;
    }
  }

  const unifyToBag = (bagArray) => {
    return bagArray.reduce((acc, item) => {
      acc[item.id] = {...item,quantity: item.quantity + (acc[item.id]?.quantity || 0)};
      return acc;
    }, {});
  }

  const sumarItems = (arrayProducts, bagProduct) => {
    return arrayProducts.map((products)=> {
      if(products.id === bagProduct.id){
        return {
          ...products,
          stock: products.stock + bagProduct.quantity
        }
      }
      return products;
    })
  }
  const restaItems = (arrayProducts, newProduct) =>{
    return arrayProducts.map((dbItems)=> {
    if(dbItems.id === newProduct.id && (dbItems.stock - newProduct.quantity >= 0)){
      return {        
        ...dbItems,
        stock: dbItems.stock - newProduct.quantity
      };
    }
    return dbItems;
  });
};

const loadData = () => getDocs(query(collection(fdb,"books"))).then((queryRes)=>{
  if(queryRes.size === 0){
    toast.warning("No hay datos disponibles");
  }else{
    const res =(queryRes.docs.map(doc => ({id:doc.id, ...doc.data()})));
    setItems(res);
    copy.current = res;

    return true;
  }
});

  useEffect(() => {
    loadData();
  }, []);


  // useEffect(() => {
  //   console.log(copy.current)
  //   copy.current = items;
  // }, [items]);

  useEffect(()=>{
    setBag(Object.values(unifyToBag(bagProducts)));
  },[bagProducts])

  useEffect(() => {
    setTotalPrice(getTotal(bag));
  }, [bag]);


  return (
    <BrowserRouter>
      <header>
        <NavBar countItems = {countItems}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element = {<ProductContainer data = {items} />}/>
          <Route path='/detail/:itemID' element = {<ItemDetailContainer data = {items} addToBag = {addToBag} />}/>
          <Route path='/categories/:categorySlug' element = {<ProductContainer data = {items}/>}/>
          <Route path='/author/:authorSlug' element = {<ProductContainer data = {items}/>}/>
          <Route path='/bolsa' element= {<BagContainer bagItems ={bag} deleteFromBag = {deleteFromBag} dumbBag={dumpBag} totalPrice = {totalPrice}/>}/>
          <Route path='/shipping_information' element = {<FormClientData buyBag = {buyBag} totalPrice = {totalPrice} bag = {bag}/>  }/>
        </Routes>
        <Toaster/>
      </main>
      <footer>
      <CategoryContainer data = {items}/>
        <Footer/>
      </footer>
    </BrowserRouter>
  )
}

export default App

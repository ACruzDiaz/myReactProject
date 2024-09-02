import NavBar from './components/NavBar/NavBar'
import './App.css'
import ProductContainer from './components/ProductContainer/productContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CategoryContainer from './components/Categories/CategoryContainer/CategoryContainer'
import BagContainer from './components/bagMain/BagContainer/BagContainer'
import { useState, useEffect, useRef} from 'react'
import FromClientData from './components/Form/FormClientData'
import FormClientData from './components/Form/FormClientData'
const db = [
  {
      id: "qgregg",
      image: "https://th.bing.com/th/id/OIP.JMSqsbBlHeIx4PQMPJf7OgHaNR?rs=1&pid=ImgDetMain",
      title: "1984",
      author: "George Orwell",
      category: "Ficción",
      editorial: "Editorial el pinguino",
      price: 12.22,
      stock: 23,
      description: "The Hurricane, conocida en España como Huracán Carter y en algunos países de Hispanoamérica como Huracán, es una película de 1999 dirigida por Norman Jewison y protagonizada por Denzel Washington. Pretende ser la verdadera historia del boxeador Rubin Carter, a quien se absolvió de triple asesinato después de que hubiera pasado casi veinte años en prisión."
  },
  {
      id: "qgrafdggg",
      image: "https://th.bing.com/th/id/OIP.az14g-TYRaFLn6VEn9ezcgHaLk?rs=1&pid=ImgDetMain",
      title: "El retrato de Dorian Gray",
      author: "Oscar Wilde",
      category: "Ficción",
      editorial: "Editorial el pinguino ",
      price: 22.22,
      stock: 13,
      description: "The Hurricane, conocida en España como Huracán Carter y en algunos países de Hispanoamérica como Huracán, es una película de 1999 dirigida por Norman Jewison y protagonizada por Denzel Washington. Pretende ser la verdadera historia del boxeador Rubin Carter, a quien se absolvió de triple asesinato después de que hubiera pasado casi veinte años en prisión."
  },
  {
      id: "syd6d",
      image: "https://th.bing.com/th/id/R.4784ab7d65f847aefda6189633ed02ea?rik=WtrW1vsdntePjA&pid=ImgRaw&r=0",
      title: "El conde de Montecristo",
      author: "Alejandro Dumas",
      category: "Terror",
      editorial: "Editorial el pinguino",
      price: 13.22,
      stock: 3,
      description: "The Hurricane, conocida en España como Huracán Carter y en algunos países de Hispanoamérica como Huracán, es una película de 1999 dirigida por Norman Jewison y protagonizada por Denzel Washington. Pretende ser la verdadera historia del boxeador Rubin Carter, a quien se absolvió de triple asesinato después de que hubiera pasado casi veinte años en prisión."
  },
  {
      id: "hhddttd",
      image: "https://th.bing.com/th/id/OIP.S-BSRmrFiFojfmo16eprBwHaLQ?rs=1&pid=ImgDetMain",
      title: "Sapiens",
      author: "Yuval Noah",
      category: "Filosofia",
      editorial: "Editorial debate",
      price: 14.22,
      stock: 21,
      description: "Su argumento principal es que Homo sapiens domina el mundo porque es el único animal capaz de cooperar flexiblemente en gran número, gracias a su capacidad única de creer en entes que existen solamente en su imaginación, como los dioses, las naciones, el dinero o los derechos humanos."
  },
  {
      id: "7yd5t",
      image: "https://th.bing.com/th/id/OIP.q_YtrrWGVIrQBz_ZWkjcGwHaLU?rs=1&pid=ImgDetMain",
      title: "La semana laboral de 4 horas",
      author: "Timothy Ferris",
      category: "Autoayuda",
      editorial: "RBA ",
      price: 12.22,
      stock: 6,
      description: "Sorprendente y sensacional, este libro cambiará tu vida. Olvídate de la jubilación y deja de aplazar tu vida: no hay ninguna necesidad de esperar y sí un montón de razones para no hacerlo, sobre todo en momentos económicamente imprevisibles. Si tu sueño es dejar de depender de un sueldo, viajar por el mundo a todo tren, ingresar más de 10.000 euros al mes, o simplemente vivir más y trabajar menos, este libro es la brújula que necesitas. Esta guía para diseñar un estilo de vida de lujo te enseña cómo Tim Ferriss pasó de ganar 40.000 dólares al año trabajando 80 horas a la semana a ganar 40.000 dólares al mes trabajando 4 horas a la semana; también a cómo externalizar tu vida en el extranjero con ayudantes virtuales por 5 dólares la hora y hacer todo lo que te plazca. Te muestra cómo artistas de primera fila viajan por todo el mundo sin abandonar sus trabajos o cómo eliminar el 50 % de tu trabajo en 48 horas aplicando los principios de un olvidado economista italiano, así cómo cambiar una carrera de largo recorrido por breves espacios de tiempo dedicados al trabajo y frecuentes minirretiros."
  },
  {
      id: "dd7d6kk",
      image: "https://th.bing.com/th/id/R.b914bed567ef08c11a012c3f40dc8820?rik=gPlclO%2b%2bwpfvng&pid=ImgRaw&r=0",
      title: "100 años de soledad",
      author: "Gabrial Garcia Marquez",
      category: "Ficción",
      editorial: "Editorial el pinguino",
      price: 43.22,
      stock: 2,
      description: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.1​ Fue catalogada como una de las obras más importantes de la lengua castellana durante el IV Congreso Internacional de la Lengua Española celebrado en Cartagena de Indias en marzo de 2007.2​ Fue incluida en la lista de las 100 mejores novelas en español del siglo XX del periódico español El Mundo,3​ en la lista de los 100 libros del siglo XX del diario francés Le Monde y en los 100 mejores libros de todos los tiempos del Club de libros de Noruega."
  },
  {
      id: "dfd7d6kk99",
      image: "https://th.bing.com/th/id/R.4358f3d46bf8fac8aeac3e9a9251851f?rik=ohJnYcMgzozazQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-gTqGJt5cfyE%2fT6FDmxKOz2I%2fAAAAAAAAADI%2flYLJaip9Kyo%2fs1600%2fportada%2bdel%2blibro%2bdel%2bperiquillo%2bsarniento.jpg&ehk=Du45cCho4nw4lYOMcYzA24nafyhrkjJVA4nZs1cA8EE%3d&risl=&pid=ImgRaw&r=0",
      title: "El periquillo sarniento",
      author: "Jose Joaquin Fernandez de Lizardi",
      category: "Ficción",
      editorial: "Editorial Sixto Valencia",
      price: 5.22,
      stock: 21,
      description: "José Joaquín Fernández de Lizardi es una de las figuras más relevantes a finales del siglo XVIII e inicios del XIX, ya que sus obras iban cargadas de un gran peso político, psicológico y analítico de la sociedad. Nacido en la Ciudad de México un 15 de noviembre de 1776, falleciendo en la misma localidad a la edad de 50 años. Su obra más notable es El Periquillo Sarniento y el día de hoy te daremos un resumen de calidad sobre este escrito."
  },
  {
      id: "kk484",
      image: "https://th.bing.com/th/id/R.108590e5aebaa2e007167620b1c03b36?rik=ns3nEivzdKU53w&pid=ImgRaw&r=0",
      title: "Asi hablo zaratustra",
      author: "Frederic Nietzche",
      category: "Filosofia",
      editorial: "Editorial Sixto Valencia",
      price: 8.22,
      stock: 12,
      description: "JAsí habló Zaratustra. Un libro para todos y para nadie1​ (título original en alemán: Also sprach Zarathustra. Ein Buch für Alle und Keinen) es un libro escrito por el filósofo alemán Friedrich Nietzsche entre 1883 y 1885 considerado su obra maestra."
  }
]
function App() {
  const [items, setItems] = useState(db);
  const [bagProducts, setBagProducts] = useState([]);
  const [bag, setBag] = useState([]);
  const copy = useRef(items);
  const [totalPrice, setTotalPrice] = useState(0);

// Acc: El resultado de las operaciones se guarda aqui. 
// Item: Elemento actual que esta siendo recorrido
// Index: Posicion del elemento item actual
// arr: El arreglo que estamos iterando

//Agregar Item a la bolsa
const addToBag = (newProduct) =>{
  if(Object.keys(newProduct).length === 0){
    console.log("Producto Vacio");
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
}

// Comprar
const buyBag = () =>{

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
          <Route path='/bolsa' element= {<BagContainer bagItems ={bag} deleteFromBag = {deleteFromBag} dumbBag={dumpBag} totalPrice = {totalPrice}/>}/>
          <Route path='/shipping_information' element = {<FormClientData buyBag = {buyBag} totalPrice = {totalPrice} />  }/>
        </Routes>
      </main>
      <footer>
      <CategoryContainer data = {items}/>
        <Footer/>
      </footer>
    </BrowserRouter>
  )
}

export default App

import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDoc, getDocs, getFirestore,query,where } from 'firebase/firestore';
import { toast } from 'sonner';
const ProductContainer = ({data}) => {

  const [loading, setLoading] = useState(true);
  const {categorySlug} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setLoading(true);
    filterCategory(categorySlug);
  }, [categorySlug,data])

  
  const filterCategory = (category) => {

    const db = getFirestore();
    const myProducts = category 
      ? query(collection(db,"books"), where("category", "==", category))
      :collection(db,"books");

    getDocs(myProducts).then((res)=>{
      const newProducts = res.docs.map((doc)=>{
        const data = doc.data();
        return {id:doc.id, ...data};
      });
      setProducts(newProducts);
    })
    .catch(()=>{
      toast.error("No se pudieron cargar los elementos")
    }).finally(()=>{
      setLoading(false);
    })
      // if(category){
      //   const filteredBooks = data.filter(li => li.category === category);
      //   setProducts(filteredBooks);  
      // }else{
      //   setProducts(data);
      // }
      
  }

  return <section className='categoryContainer'>
    {!loading ? products.map((book) => (<ProductCard 
    key={book.id}
    id= {book.id}
    image = {book.image} 
    title = {book.title} 
    author ={book.author}
    category = {book.category}
    editorial = {book.editorial} 
    price = {book.price} />))
    : <><div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></>
    
    }
  </section>

  }
export default ProductContainer
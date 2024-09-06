import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDoc, getDocs, getFirestore,query,where } from 'firebase/firestore';
import { toast } from 'sonner';
const ProductContainer = ({data}) => {

  const [loading, setLoading] = useState(true);
  const {categorySlug, authorSlug } = useParams();

  const [products, setProducts] = useState([]);


  useEffect(()=>{
    setLoading(true);
    if(categorySlug){
      filterCategory(categorySlug);
    }
    else if(authorSlug){
      filterAuthor(authorSlug);
    }else{
      showAll();
    }
  }, [categorySlug, authorSlug])


  const showAll = () =>{
    const db = getFirestore();
    const myProducts = collection(db,"books");
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
  }
  const filterAuthor = (author) => {
    const db = getFirestore();
    const myProducts = query(collection(db,"books"), where("author", "==", author))

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
  }
  
  const filterCategory = (category) => {

    const db = getFirestore();
    const myProducts = query(collection(db,"books"), where("category", "==", category));
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
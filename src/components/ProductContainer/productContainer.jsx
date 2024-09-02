import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductContainer = ({data}) => {

  const {categorySlug} = useParams();
  const [products, setProducts] = useState([]);
  // const [error, SetError] = useState(null);


  //Filtrar items por categoria

  useEffect(()=>{
    filterCategory(categorySlug);
  }, [categorySlug])

  
  const filterCategory = (category) => {
      if(category){
        const filteredBooks = data.filter(li => li.category === category);
        setProducts(filteredBooks);  
      }else{
        setProducts(data);
      }
      
  }



  return <section className='categoryContainer'>
    {products && products.map((book) => (<ProductCard 
    key={book.id}
    id= {book.id}
    image = {book.image} 
    title = {book.title} 
    author ={book.author}
    category = {book.category}
    editorial = {book.editorial} 
    price = {book.price} />)) 
    }
  </section>

  }
export default ProductContainer
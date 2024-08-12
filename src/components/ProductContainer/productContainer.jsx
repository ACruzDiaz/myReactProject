import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
//import { itemList } from '../../data/bookList'
const dbRef = '/bookList.json';

const ProductContainer = () => {

  const [items, setItems] = useState(null);

  useEffect(()=>{

        fetch(dbRef)
        .then((res) => res.json())
        .then(data => {
          setTimeout(()=> {
            setItems(data.books);
          }, 500);
        })
          .catch((error) => console.log(error));
        
        
    
  }, [])


  return <section>
    {items && items.map((book) => <ProductCard 
    key={book.id}
    id= {book.id}
    image = {book.image} 
    title = {book.title} 
    author ={book.author}
    category = {book.category}
    editorial = {book.editorial} 
    price = {book.price} />)}
  </section>
}

export default ProductContainer
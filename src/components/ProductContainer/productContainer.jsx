import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
//import { itemList } from '../../data/bookList'
import Page404 from '../Page404/Page404';
import useFetch from '../../hooks/useFetch';


const ProductContainer = () => {
  const dbRef = '/bookList.json';
  const {categorySlug} = useParams();
  const [items, setItems] = useState(null);
  const {data, isPending, error} = useFetch(dbRef)
  useEffect(()=>{
    console.log(isPending)
    if(!isPending){
            if(categorySlug){
              const filterBooks = data.books.filter(li => li.category === categorySlug);
              setItems(filterBooks);
              
            }else{
              setItems(data.books);
            }
          }
  }, [categorySlug,data])


  return <section>
    {items && items.length > 0 && items.map((book) => (<ProductCard 
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
import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
//import { itemList } from '../../data/bookList'
import Page404 from '../Page404/Page404';
const dbRef = '/bookList.json';

const ProductContainer = () => {

  const {categorySlug} = useParams();
  const [items, setItems] = useState(null);

  useEffect(()=>{

        fetch(dbRef)
        .then((res) => res.json())
        .then(data => {

            if(categorySlug){
              const filterBooks = data.books.filter(li => li.category === categorySlug);
                console.log(filterBooks)
                setItems(filterBooks);

              
            }else{
              setItems(data.books);
            }
        })
          .catch((error) => console.log(error));
        
        
    
  }, [categorySlug])


  return <section>
    {items && items.length > 0? items.map((book) => (<ProductCard 
    key={book.id}
    id= {book.id}
    image = {book.image} 
    title = {book.title} 
    author ={book.author}
    category = {book.category}
    editorial = {book.editorial} 
    price = {book.price} />)) : <Page404/>
    }
  </section>

  }
export default ProductContainer
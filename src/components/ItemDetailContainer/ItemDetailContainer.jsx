import './ItemDetailContainer.css'
import ItemDetail from '../ItemDatail/ItemDetail.jsx';
import { useEffect, useState } from 'react'
const dbRef = '/bookList.json';

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  useEffect(()=>{

        fetch(dbRef)
        .then((res) => res.json())
        .then(data =>  data.books.find(el => el['id'] === 'hhddttd'))
        .then(searchR => {
          setItem(searchR);
        })
          .catch((error) => console.log(error));
        
        
    
  }, [])


  return <section>
    
    {item &&
    <ItemDetail 
    id= {item.id}
    image = {item.image} 
    title = {item.title} 
    author ={item.author}
    category = {item.category}
    editorial = {item.editorial} 
    price = {item.price} />
    }
  </section>
}

export default ItemDetailContainer
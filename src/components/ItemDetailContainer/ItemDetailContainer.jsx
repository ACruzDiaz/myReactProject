import './ItemDetailContainer.css'
import ItemDetail from '../ItemDatail/ItemDetail.jsx';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const dbRef = '/bookList.json';

const ItemDetailContainer = () => {
  const {itemID} = useParams();
  console.log(itemID);
  const [item, setItem] = useState(null);

  useEffect(()=>{

        fetch(dbRef)
        .then((res) => res.json())
        .then(data =>  data.books.find(el => el['id'] === itemID))
        .then(searchR => {
          setItem(searchR);
        })
          .catch((error) => console.log(error));
        
        
    
  }, [itemID])


  return <section>
    
    {item &&
    <ItemDetail 
    id= {item.id}
    image = {item.image} 
    title = {item.title} 
    author ={item.author}
    category = {item.category}
    editorial = {item.editorial} 
    price = {item.price}
    description = {item.description}
    stock = {item.stock} />
    }
  </section>
}

export default ItemDetailContainer
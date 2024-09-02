import './ItemDetailContainer.css'
import ItemDetail from '../ItemDatail/ItemDetail.jsx';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({data, setNewProduct, addToBag}) => {
  const {itemID} = useParams();
  const [item, setItem] = useState(null);
  const [productObject, setProductObject] = useState(null);

  useEffect(()=>{
      const searchRes = data.find(el => el['id'] === itemID)
      setItem(searchRes);
  }, [itemID,data])

  useEffect(()=>{
    if(productObject){
      addToBag(productObject)
    }
  },[productObject])

  return <section className='itemDetailContainer'>
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
    stock = {item.stock} 
    setProductObject = {setProductObject}
    />
    }
  </section>
}

export default ItemDetailContainer
import './ItemDetail.css'
import  ItemCounter from '../itemCounter/ItemCounter'
import Link from '../Link/Link'
import { createContext, useState } from 'react'


const ItemDetail = (props) => {
  const [count, setCount] = useState(1);


  const addToBagHandler = (e) =>{
    e.preventDefault();
    props.setProductObject({
      id: props.id,
      quantity: count,
      producto: props,
    });
  }
  return (
    <article className='articleItemDetail'>
        <img className='imgItemDetail' src={props.image} alt={props.title} />
        <div className='containerItemDetail'>
          <h2 className='titleItemDetail' >{props.title}</h2>
          <p className='authorItemDetail' > {props.author} </p>
          <p className='editorialItemDetail' >{props.editorial}</p>
          <p className='priceItemDetail' >${props.price} </p>
          <ItemCounter stockValue={props.stock} setCount ={setCount}/>
          <button type='button' onClick={addToBagHandler} className='vaciarCarrito'>Agregar a la bolsa</button>
        </div>
        <p className='descriptionItemDetail' >{props.description}</p>
      </article>
  )
}

export default ItemDetail
import './ItemDetail.css'
import  ItemCounter from '../itemCounter/ItemCounter'
import { Link } from 'react-router-dom'
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
          <Link to={`/author/${props.author}`}>
            <p className='authorItemDetail' > {props.author} </p>
          </Link>
          <p className='editorialItemDetail' >{props.editorial}</p>
          <p className='priceItemDetail' >$ {Number.parseFloat(props.price).toFixed(2)}</p>
          <ItemCounter stockValue={props.stock} setCount ={setCount}/>
          {props.stock > 0 ? 
          <button type='button' onClick={addToBagHandler} className='vaciarCarrito'>Agregar a la bolsa</button>:
          <p className='subtotal'>Producto <span>no disponible</span> por el momento</p>}
        </div>
        <p className='descriptionItemDetail' >{props.description}</p>
      </article>
  )
}

export default ItemDetail
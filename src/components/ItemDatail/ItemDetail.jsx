import './ItemDetail.css'
import  ItemCounter from '../itemCounter/ItemCounter'
import Link from '../Link/Link'
const ItemDetail = (props) => {

  return (
    <article className='articleItemDetail'>
        <img className='imgItemDetail' src={props.image} alt={props.title} />
        <div className='containerItemDetail'>
          <h2 className='titleItemDetail' >{props.title}</h2>
          <p className='authorItemDetail' > {props.author} </p>
          <p className='editorialItemDetail' >{props.editorial}</p>
          <p className='priceItemDetail' >{props.price} </p>
          <ItemCounter stockValue={props.stock}/>
          <Link isBordered='true' text="Agregar a la bolsa de compras" href='#'/>
        </div>
        <p className='descriptionItemDetail'>{props.description}</p>
      </article>
  )
}

export default ItemDetail
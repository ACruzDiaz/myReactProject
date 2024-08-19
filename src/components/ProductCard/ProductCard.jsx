import './ProductCard.css'
import {Link} from 'react-router-dom'
const ProductCard = (props) =>{
  return <article>
    <img src={props.image} alt={props.title} />

    <Link to = {`/categories/${props.category}`} className='categoryProductCard'>
      {props.category} 
    </Link>

    <div>
      <Link to= {`/detail/${props.id} ` }className='titleProductCard' >
        <h2  >{props.title}</h2>
      </Link>
    </div>
    <p className='authorProductCard' > {props.author} </p>
    <p className='editorialProductCard' >{props.editorial}</p>
    <p className='priceProductCard' >{props.price} </p>
  </article>
}

export default ProductCard
import './ProductCard.css'
import {Link} from 'react-router-dom'
const ProductCard = (props) =>{
  return <article>
    <Link to= {`/detail/${props.id}`}>
      <img src={props.image} alt={props.title} />
    </Link>
    <Link to = {`/categories/${props.category}`} className='categoryProductCard'>
      {props.category} 
    </Link>

    <div>
      <Link to= {`/detail/${props.id} ` }className='titleProductCard' >
        <h2  >{props.title}</h2>
      </Link>
    </div>
    <Link to={`/author/${props.author}`}>
      <p className='authorProductCard' > {props.author} </p>
    </Link>
    <p className='editorialProductCard' >{props.editorial}</p>
    <p className='priceProductCard' >${Number.parseFloat(props.price).toFixed(2)}</p>
  </article>
}

export default ProductCard
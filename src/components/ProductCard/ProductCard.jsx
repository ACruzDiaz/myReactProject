import './ProductCard.css'

const ProductCard = (props) =>{
  return <article>
    <img src={props.image} alt={props.title} />
    <p className='categoryProductCard' >{props.category} </p>
    <div>
      <h2 className='titleProductCard' >{props.title}</h2>
    </div>
    <p className='authorProductCard' > {props.author} </p>
    <p className='editorialProductCard' >{props.editorial}</p>
    <p className='priceProductCard' >{props.price} </p>
  </article>
}

export default ProductCard
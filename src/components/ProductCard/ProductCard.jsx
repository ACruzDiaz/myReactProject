import './ProductCard.css'

const ProductCard = (props) =>{
  return <article>
    <img src={props.image} alt={props.title} />
    <h2>{props.title}</h2>
    <p> {props.description} </p>
    <p> {props.price} </p>
  </article>
}

export default ProductCard
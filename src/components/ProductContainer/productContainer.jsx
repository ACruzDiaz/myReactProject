import './ProductContainer.css'
import ProductCard from '../ProductCard/ProductCard'
import { itemList } from '../../data/bookList'


const ProductContainer = () => {
  return <section>
    {itemList.map((book) => <ProductCard image = {book.image} title = {book.title} description ={book.description} price = {book.price} />)}
  </section>
}

export default ProductContainer
import './CategoryItem.css'
import {Link} from 'react-router-dom'
const CategoryItem = (props) => {
  return(
    <Link to= {`/categories/${props.categoryName}`} className='categoryItem'>
      <h3>{props.categoryName} {'(' + props.categoryQuantity + ")"}</h3>
    </Link>
  )
}
export default CategoryItem
import svgCart from '/shopping-cart.svg'
import './CartIcon.css'
const CartIcon = (props)=>{

  return <div className='iconCount'>
            <img src={svgCart} alt="Carrito"/>
            <span>{props.count}</span>
          </div>
}

export default CartIcon
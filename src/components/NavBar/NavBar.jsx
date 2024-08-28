import './NavBar.css'
import Link from "../Link/Link"
import { navItems } from '../../data/NavList'
import CartIcon from '../CartIcon/CartIcon'
import { Link as LinkReact } from 'react-router-dom'


const NavBar = () => {
  
  return <nav>
    <LinkReact to= '/' className='logo'>Libro Tienda</LinkReact>
    <ul>
      {navItems.map((item) =>
      <Link 
        svg = {item.svg} 
        text = {item.text} 
        href = {item.href} 
        isFilled = {false} 
        isBordered = {false} 
        id = {item.id}>
      </Link>)}
    </ul>
    </nav>
}
export default NavBar


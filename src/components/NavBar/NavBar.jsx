import './NavBar.css'
import Link from "../Link/Link"
import { navItems } from '../../data/NavList'
import CartIcon from '../CartIcon/CartIcon'
const NavBar = () => {
  return <nav>
    <span className='logo'>Libro Tienda</span>
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
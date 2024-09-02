import './NavBar.css'
import Link from "../Link/Link"
import { navItems } from '../../data/NavList'
import { Link as LinkReact } from 'react-router-dom'
import {useEffect} from 'react';


const NavBar = ({countItems}) => {

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
        id = {item.id}
        key = {item.id}
        count = {item.count}
        number={countItems }>
      </Link>)}
    </ul>
    </nav>
}
export default NavBar


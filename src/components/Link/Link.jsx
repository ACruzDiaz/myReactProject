import './Link.css'
import { Link as LinkRouter } from 'react-router-dom'
const Link = ({svg, text, href, isFilled = false, isBordered = false ,  side = 'left', id, count = 1}) => {
  
  return <LinkRouter to={href}
  className= { `${isFilled? "filled": ""} ${isBordered? "bordered" :""}linkComponent`} 
  // href={href} 
  key={id}>
    {svg && side === 'left' && (<div className='iconCount'><img src={svg} alt='icono'/><span>{count}</span></div>)}
    
    {text}

    {svg && side === 'right' === true && (<img src={svg} alt='icono'/>)}
    </LinkRouter>
    

}

export default Link 
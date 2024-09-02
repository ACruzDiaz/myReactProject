import './Link.css'
import { Link as LinkRouter } from 'react-router-dom'
const Link = ({svg, text, href, isFilled = false, isBordered = false ,  side = 'left', id, count = false, number = 0}) => {
  
  const displayNumber = !count ? {display:'none'}: {};
  return <LinkRouter to={href}
  className= { `${isFilled? "filled": ""} ${isBordered? "bordered" :""}linkComponent`} 
  key={id}>
    {svg && side === 'left' && (<div className='iconCount'><img src={svg} alt='icono'/><span style={displayNumber}>{number}</span></div>)}
    
    {text}

    {svg && side === 'right' === true && (<img src={svg} alt='icono'/>)}
    </LinkRouter>
    

}

export default Link 
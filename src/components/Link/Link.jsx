import './Link.css'

const Link = ({svg, text, href, isFilled = false, isBordered = false ,  side = 'left', id, count = 1}) => {
  
  return <a 
  className= {`${isFilled? "filled": ""} ${isBordered? "bordered" :""}`} href={href} key={id}>
    {svg && side === 'left' && (<div className='iconCount'><img src={svg} alt='icono'/><span>{count}</span></div>)}
    
    {text}

    {svg && side === 'right' === true && (<img src={svg} alt='icono'/>)}
    </a>
    

}

export default Link 
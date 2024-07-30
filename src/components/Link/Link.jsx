import './Link.css'

const Link = (props) => {
  
  return <a className= {`${props.isFilled? "filled": ""} ${props.isBordered? "bordered" :""}`} href={props.href}>{props.svg}{props.text}</a>

}

export default Link 
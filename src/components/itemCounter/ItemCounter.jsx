import useCounter from '../../hooks/useCounter'
import './ItemCounter.css'


const ItemCounter = ({stockValue}) =>{

  const {count, countDown, countUp, reset} = useCounter(1, stockValue)

  return(
    <div className='counterContainer'>
      <button className='addBtn' onClick={()=>countUp()}>
        +
      </button>
      <div className='amountDis'>
        {count}
      </div>
      <button className='subBtn' onClick={()=>countDown()}>
        -
      </button>
    </div>
  )
}

export default ItemCounter
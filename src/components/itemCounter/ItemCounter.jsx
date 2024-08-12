import { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({stockValue}) =>{
  const [count, setCount] = useState(0);

  const countUp = () => {
    if(count>=0 && count<=stockValue){
      setCount(() => count+1);
    }
  }
  const countDown = () => {
    if(count > 0){
      setCount(() => count-1);
    }
  }

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
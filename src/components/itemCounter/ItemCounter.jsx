import { useEffect } from 'react'
import useCounter from '../../hooks/useCounter'
import './ItemCounter.css'


const ItemCounter = ({stockValue, setCount}) =>{

  const {count, countDown, countUp, reset, empty} = useCounter(1, stockValue)

  useEffect(()=>{
    if(stockValue === 0){
      empty();
    }else{
      reset();
    }
  },[stockValue]);

  useEffect(() => {
    setCount(count);
  }, [count]);
  
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
import { useState } from "react";

const UseCounter = (initialState, maxValue) => {
  const [count, setCount] = useState(initialState);

  const countUp = () => {
    if(count>= initialState && count<=maxValue){
      setCount(() => count+1);
    }
  }
  const countDown = () => {
    if(count > initialState){
      setCount(() => count-1);
    }
  }

  const reset = () => {
    setCount(() => initialState)
  }

  return {count, countUp, countDown, reset}
}

export default UseCounter
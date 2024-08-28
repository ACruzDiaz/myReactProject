import { useState, useEffect } from "react";

const useFetch = (url)=> {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{

      fetch(url)
      .then(res => {
        console.log(res)
        if(!res.ok){
          throw new Error( !res.statusText ? "Ocurrio un error": res.statusText)
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch(err => {
        setError(err);
        console.log(err);
      })



    // try{
    //   fetch(url)
    //   .then(res => {
    //     if(!res.ok){
    //       throw {
    //         err:true,
    //         status: res.status,
    //         statusText: !res.statusText ? "Ocurrio un error": res.statusText,
    //       };
    //     }
    //     return res.json()
    //   })
    //   .then((data) => {

    //     setIsPending(false);
    //     setData(data);
    //   })

    // }catch(err){
    //   setIsPending(true);
    //   setError(err);
    //   console.log(err);
    // }

  },[url])

  return {data, isPending, error}
}

export default useFetch
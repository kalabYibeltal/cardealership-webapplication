import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setdata ] =  useState(null)
    const [error, seterror] = useState(null)
    
    
    useEffect(() =>{
        const abortC = new AbortController();
         fetch(url, {signal: abortC.signal})
              .then(res => {
                  if(!res.ok){
                      throw Error('couldnt fetch the data');
                  }
                  return res.json()
              })
              .then(data => {
                  seterror(null)
                  setdata(data)
                  
              }).catch((err) => {
                  if (err.name ==='AborrtError'){
                      console.log('aborted')
                  } else{
              
                  seterror(err.message) }
              })
          
          return () => abortC.abort();

      }, [url]) 
      return {data, error}
}

export default useFetch;
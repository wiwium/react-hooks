
import {useEffect, useState, useRef} from 'react';

function useFetch(initialState, url){
  
  const [data,setData] = useState(initialState);


  const isMounted = useRef(true);


  useEffect( () => {
    return () => {
      isMounted.current = false;
    }
  },[])


  useEffect(()=>{
    fetch(url).then((_)=> _.text()).then((_)=>{
      setTimeout(()=>{

        if(isMounted.current){
          setData(_);
        }

      },1000);
    });
  },[url]);

  return data;

}

export default useFetch;
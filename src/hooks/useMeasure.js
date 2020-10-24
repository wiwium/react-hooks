
import { useLayoutEffect, useRef, useState } from 'react';



function useMeasure(deps){



  const domRef = useRef();
 
  const [boundingBox, setBoundingBox] = useState("");  
  
  useLayoutEffect(()=>{
    setBoundingBox(JSON.stringify(domRef.current.getBoundingClientRect(),null,2));
  }, deps)



  return [boundingBox,domRef];
}


export default useMeasure;
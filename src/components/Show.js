
import React,{useLayoutEffect, useRef, useState} from 'react';

import useMeasure from '../hooks/useMeasure';

function Show({showText}){
  
  const countRenders = useRef(0);
  
  const [boundingBox, domRef] = useMeasure([showText])

  countRenders.current++;
  // console.log(countRenders.curren t);

  return (
  <>
    <div style={{display: "flex"}}>
      
      <h3 ref={domRef}>{showText}</h3>
    </div>
      <pre>{boundingBox}</pre>   
    <p>{countRenders.current}</p>
  </>
  );
}

export default Show; 
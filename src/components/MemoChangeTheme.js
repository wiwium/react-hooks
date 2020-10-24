
import React,{ useCallback, useEffect, useMemo, useState } from 'react';


function MemoChangeTheme(){

  const slowTask = (number) => {
    for(let i=0;i<=1000000000;i++){}
    console.log('time...');
    return number*2;
  }


  const [dark, setDark] = useState(false);
  const themeStyle = {
    background: dark? 'black': 'white',
    color: dark? 'white': 'black',
  }
  
  
  const [num,setNum] = useState(0);
 
  // const doubleNumber = useMemo( ()=> {
  //   return slowTask(num);
  // },[num]);


  const [dbNum,setDbNum] = useState(0);
  useEffect( () => {
    setDbNum(slowTask(num));
  },[num])




  return (
    <div>
      <input type="number" onChange={(e)=> {
        setNum(parseInt(e.target.value));
      }} value={num}></input>
      <button onClick={()=>{ setDark(d => !d)}}>Change theme</button>
      <div style={themeStyle}>{dbNum}</div>
    </div>
  )

}


export default MemoChangeTheme;
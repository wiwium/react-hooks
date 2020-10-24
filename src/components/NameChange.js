import React,{useState} from 'react';


function ChangeName(){

  const [temp,setTemp] = useState("Hello Temp");

  return(
    <div>

      <button onClick={()=>{setTemp(temp === "nameChange"?"name":"nameChange")}}>Click</button>
      <div>{temp}</div>
    </div>
  )


}


export default ChangeName;
import React, { useEffect, useState, useRef } from 'react';

import useForm from './hooks/useForm';
import useAllForm from './hooks/useAllForm';
import useFetch from './hooks/useFetch';


import Show from './components/Show';
import FetchAndShow from './components/FetchAndShow';
import NameChange from './components/NameChange';
import MemoChangeTheme from './components/MemoChangeTheme';



function App() {
  
  
  const [count, setCount] = useState(0);
  const url = `http://numbersapi.com/${count}`
  const numbersapi = useFetch("Loading...", url);

  
  const [showHello,setShowHello] = useState(true);


  const [name, setName] = useForm("ketan");
  const [email, setEmail] = useForm("Hello");
  const [data, setData] = useAllForm({
    name:"ketan",
    email:"ketan@1010"});


  const inputRef = useRef();


  return (
    <div className="App">

      <MemoChangeTheme/>


      <button onClick={()=>{setCount(ctn=>ctn-1)}}>-</button> {count} <button onClick={()=>{setCount(ctn=>ctn+1)}}>+</button>
      <br/> 
      <button onClick={() => {setShowHello(!showHello)}}>Toggle</button>
      {showHello && <Show showText={numbersapi}/>}
      {showHello && <FetchAndShow number={count+2}/>}

      <input ref={inputRef} name="name" type="text" value={data.name} onChange={setData}/>
      <input name="email" type="text" value={data.email} onChange={setData}/>
      <br/>
      <button onClick={()=>{ inputRef.current.focus();}}> Focus</button>
      <br/> 
      <NameChange/>
    </div>
  );
}

export default App;

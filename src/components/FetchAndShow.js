import React,{} from 'react';

import useFetch from '../hooks/useFetch';


function FetchAndShow({number}){

  const url = `http://numbersapi.com/${number}`
  const numbersapi = useFetch("Loading...", url);


  
  
  return (
  <>
   <h3>{numbersapi}</h3>
  </>
  );
}

export default FetchAndShow; 
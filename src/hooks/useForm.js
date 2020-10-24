import {useState} from 'react';

function useForm(initialState) {
  
  const [state, setState] = useState(initialState);


  return [state, (e)=>{
    setState(e.target.value);
  }]

}

export default useForm;
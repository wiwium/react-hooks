import {useState} from 'react';


function useAllForm(inititalState){

  const [state,setState] = useState(inititalState);

  return [state,(e)=>{
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }]
}


export default useAllForm; 
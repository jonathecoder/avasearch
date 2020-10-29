import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {
    selectResoults,
    searchAsync,
    google,
    setGoogleResoults,
} from './searchSlice'

export function Search() {
    const [inputText,setInputText] = useState('')
    const dispatch = useDispatch()
    const resoults = useSelector(state => state.result);
    //const resoults = useSelector(state => state.resoults);
   // console.log(resoults)

    const handleSubmit = e => {
        e.preventDefault();
      
     //  dispatch(setGoogleResoults(inputText))
    //   console.log(inputText)
       dispatch(setGoogleResoults(inputText))
    };
    
  return (
    <div>
      Buscar
      <form onSubmit={handleSubmit}>
        <input 
            onChange={ e => setInputText (e.target.value)} 
            value = { inputText}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

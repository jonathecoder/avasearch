import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './search.css'
import {

    cleanSearch,
    setSearchOptions,
    searchGoogleAsync,
    searchBingAsync,
} from './searchSlice'

export function Search() {
    const options = [
      'Google', 'Bing', 'Ambos'
    ];
    const defaultOption = options[0];
    const [inputText,setInputText] = useState('')
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search);
    
    //const resoults = useSelector(state => state.resoults);
    console.log(searchState)

    const handleSubmit = e => {
      e.preventDefault();
      console.log(searchState)
     
      dispatch(cleanSearch());

    if(searchState.searchOption == "Google" || searchState.searchOption == "Ambos") {
      dispatch(searchGoogleAsync(inputText))
     }
     if(searchState.searchOption == "Bing" || searchState.searchOption == "Ambos") {
      dispatch(searchBingAsync(inputText))
     }
   
    };

  const onSelect = e => {
    dispatch(setSearchOptions(e))
  };
    
  return (
    <div>
      <div className="form-container">
      <form
       className="searchForm"
       onSubmit={handleSubmit}>
        <input 
            className="search-input" 
            onChange={ e => setInputText (e.target.value)} 
            value = { inputText}
        />
        <Dropdown
          className="search-dropdown" 
          options={options} 
          onChange={onSelect} 
          value={defaultOption}  
          placeholder="Select an option" 
        />
        <button
         type="submit"
         className="search-button" 
         >Buscar
         </button>
      </form>
      </div>
      {searchState.result.google.results &&
      <div className="resoults-container">
        <div className="engine-title">Google </div>
        
      {searchState.result.google.results.map((result)=>
      
      <div className="result-box" key={result.cacheId}>
        
        <div className="fill-width">{result.title}</div>   
        <div className="fill-width"><a href={result.link}>{result.link.substring(0, 100)}</a></div>   
        <div className="fill-width">{result.snippet}</div>   
      </div>)}
     
      </div>}


      {searchState.result.bing.results &&
      <div className="resoults-container"> 
        <div className="engine-title">Bing </div>

      {searchState.result.bing.results.map((result)=>   
      <div className="result-box" key={result.id} >
        
     
        <div className="fill-width">{result.name}</div>   
        <div className="fill-width"><a href={result.displayUrl}>{result.displayUrl.substring(0, 100)}</a></div>   
        <div className="fill-width">{result.snippet}</div>   
      
      </div>)}
     
      </div>}

    </div>
  );
}

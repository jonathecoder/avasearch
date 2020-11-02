import { createSlice } from '@reduxjs/toolkit';


export const searchSlice = createSlice({
    name : 'search',
    initialState: {
        result:{
                google:{results:[]},
                bing:{results:[]}
            },
        searchOption:"Google"

       
    },
    reducers:{
        
        cleanSearch:  (state,action) =>{
            state.result.google.results = []
            state.result.bing.results = []
        },

        setGoogleResoults: (state,action) =>{
            const {payload} = action;
            state.result.google.results = payload.items
 
        },
        setBingResoults: (state,action) =>{
            const {payload} = action;
            state.result.bing.results = payload.webPages.value
         
        },
        setSearchOptions: (state,action) =>{
            const {payload} = action;
            
            state.searchOption = payload.value


        }
    }
});

export const searchGoogleAsync = term => dispatch => {
    fetch("https://www.googleapis.com/customsearch/v1?q="+term+"&key=AIzaSyD8JCOQumDA9t68yimK55dk2MDdP_eKCfM&cx=030844d7242c850bc")
    .then(response => response.json())
    .then(data => {
        dispatch(setGoogleResoults(data ))
    });
};

export const searchBingAsync = term => dispatch => {
   const  options = {
        headers: {
            'Ocp-Apim-Subscription-Key': '74c468e0f1864839abe8e6a1f11bd13c'
          }
    }
    fetch("https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?q="+term+"&customconfig=d311c875-8de1-4c5d-959d-5c0f9d5d1d98&mkt=en-US",options)
    .then(response => response.json())
    .then(data => {
   
        dispatch(setBingResoults(data ))
    });
};

export const {cleanSearch,setGoogleResoults,setBingResoults,setSearchOptions} = searchSlice.actions
export const selectResoults = state => state.search.result;
export default searchSlice.reducer;
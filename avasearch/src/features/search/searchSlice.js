import { createSlice } from '@reduxjs/toolkit';


export const searchSlice = createSlice({
    name : 'search',
    initialState: {
        result:{
                google:{results:[]},
                bing:{results:[]}
            }
       
    },
    reducers:{
        google: (state,action) =>{
            const {payload} = action;

            // uso immer para mutar el o bjeto 
           // search.resoults.push({test:"test"})
        },

        setGoogleResoults: (state,action) =>{
            const {payload} = action;
            
            console.log(payload)
            
            // uso immer para mutar el o bjeto 
            //  search.resoults.push({test:payload})
        },
        setBingResoults: (state,action) =>{
            const {payload} = action;

            // uso immer para mutar el o bjeto 
         //   state.resoults.push({test:"test"})
        }
    }
});

export const searchAsync = resoults => dispatch => {
    setTimeout(() => {
      dispatch(setGoogleResoults(resoults));
    }, 1000);
  };
  

export const {setGoogleResoults,google} = searchSlice.actions

export const selectResoults = state => state.search.result;


export default searchSlice.reducer;
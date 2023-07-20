import { POSTS_ERROR, POSTS_LOADING, POSTS_RESET, POSTS_SUCCESS } from "./posts.types"





let intialState={

    loading:false,
    error:false,
   data:[]
}


export const postReducer=(state=intialState,{type,payload})=>{

    switch (type) {
    
        case POSTS_ERROR:{
        
            return{
        ...state,
        error:true
            }
        }
        case POSTS_SUCCESS:{
        
            return{
               ...state,
               loading:false,
               error:false,
               data :payload
            }
        }
        
        case POSTS_LOADING:{
        
            return{
               ...state,
               loading:true 
            }
        }
        case POSTS_RESET:{
        
            return{
               ...state,
               data:[] 
            }
        }
        
        
            default:{
            return state    
        }
        }

}
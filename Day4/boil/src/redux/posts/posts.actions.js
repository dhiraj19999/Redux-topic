



import { getpostapi } from "./post.api"
import { POSTS_ERROR, POSTS_LOADING, POSTS_SUCCESS } from "./posts.types"


export const getPosts=()=>async(dispatch)=>{



    try {
dispatch({type:POSTS_LOADING})
      let data=await getpostapi()
      dispatch({type:POSTS_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:POSTS_ERROR})
    }
    
    }
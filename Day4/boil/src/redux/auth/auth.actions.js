






import { FEED__RESET } from "../feed/feed.types"
import { POSTS_RESET } from "../posts/posts.types"
import { loginapi } from "./auth.api"
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_LOGOUT, AUTH_LOGIN_SUCCESS } from "./auth.types"



export const getauth=(cred)=>async(dispatch)=>{



    try {
dispatch({type:AUTH_LOGIN_LOADING})
      let data=await loginapi(cred)
      dispatch({type:AUTH_LOGIN_SUCCESS,payload:data})
    } catch (error) {
      dispatch({type:AUTH_LOGIN_ERROR})
    }
    
    }


    export const logout=()=>(dispatch)=>{

dispatch({type:AUTH_LOGIN_LOGOUT})
dispatch(FEED__RESET)
dispatch(POSTS_RESET)
    }
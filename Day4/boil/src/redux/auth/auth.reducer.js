import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_LOGOUT, AUTH_LOGIN_SUCCESS } from "./auth.types"


let token=localStorage.getItem("token")

let intialState={

    loading:false,
    error:false,
    isLoggedin:token?true:false,
    token:""
}


export const authReducer=(state=intialState,{type,payload})=>{

switch (type) {
    
case AUTH_LOGIN_ERROR:{
    return{
        ...state,
        error:true
    }
}

case AUTH_LOGIN_SUCCESS:{
   localStorage.setItem("token",payload.token)
    return{
        ...state,
        loading:false,
        token:payload.token,
        isLoggedin:true
    }
}

case AUTH_LOGIN_LOGOUT:{
    return{
        ...state,
        token:"",
        isLoggedin:false

    }
}
case AUTH_LOGIN_LOADING:{
    localStorage.removeItem("token")
    return{
        ...state,
        loading:true
    }
}
    default:{
    return state    
}
}
}

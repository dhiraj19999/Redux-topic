import { FEED__ERROR, FEED__LOADING, FEED__RESET, FEED__SUCCESS } from "./feed.types"








let intialState={

    loading:false,
    error:false,
   data:[]
}


export const feedReducer=(state=intialState,{type,payload})=>{

switch (type) {
    
case FEED__ERROR:{

    return{
...state,
error:true
    }
}
case FEED__SUCCESS:{

    return{
       ...state,
       loading:false,
       error:false,
       data :payload
    }
}

case FEED__LOADING:{

    return{
       ...state,
       loading:true 
    }
}
case FEED__RESET:{

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
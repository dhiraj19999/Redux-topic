import { COUNTRE_DEC,COUNTRE_INC } from "./counter.actionTypes";


let initialState = {

    todos:[],
    count:0

}


export const Counter_reducer = (state = initialState, {type, payload }) => {

    switch (type) {

   

   
    case COUNTRE_INC:{
        return{
...state,
    count:state.count+payload
        }
    }

    case COUNTRE_DEC:{
        return{
...state,
    count:state.count-payload
        }
    }

   


    default:{
return state;

}
}
}

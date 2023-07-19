
import { ADDTODO,GETTODO,DELETETODO } from "./todo.actionTypes"


let initialState={
    todos:[]
}



export const Todo_reducer = (state = initialState, {type, payload }) => {

    switch (type) {

    case ADDTODO:{
        return{
        ...state,
        todos:[...state.todos,payload],
        }

    }
    case GETTODO:{
        return{
        ...state,
        todos:payload,
        }

    }

    case DELETETODO:{
        return{
        ...state,
        todos:state.todos.filter((el)=> el.id!==payload)
        }

    }
   

  /*  case  UPDATETODO:{
        return{
            ...state,
            todos:state.todos.map((todo)=>{
                if(todo.id===payload.id){
                    return{
                        ...todo,
                        ...payload.changes
                    }
                }
                return todo
            })
        }
    }*/


    default:{
return state;

}
}
}

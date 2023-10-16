
import { AddTodo, DeleteTodo, UpdateTodo,GetTodo} from "./actionTypes";

let initialState = {

    todos:[]

}


export const reducer = (state = initialState, {type, payload }) => {

    switch (type) {

    case AddTodo:{
        return{
        ...state,
        todos:[...state.todos,payload],
        }

    }
    case GetTodo:{
        return{
        ...state,
        todos:payload,
        }

    }

    case DeleteTodo:{
        return{
        ...state,
        todos:state.todos.filter((el)=> el.id!==payload)
        }

    }

    case  UpdateTodo:{
        return{
            ...state,
            todos:state.todos.map((todo)=>{
                if(todo.id===payload.id){
                    return{
                        ...todo,
                        //...payload.changes
                        value:payload.changes
                    }
                }
                return todo
            })
        }
    }


    default:{
return state;

}
}
}

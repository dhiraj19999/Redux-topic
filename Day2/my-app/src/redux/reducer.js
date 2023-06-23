
import { AddTodo, DeleteTodo, UpdateTodo,GetTodo} from "./actionTypes";

let initialState={
todos:[]
}


export const reducer = (state = initialState, {type, payload }) => {
switch (type) {

    case AddTodo:{
        return{
        ...state,
        todos:[ ...state.todos, payload],
        }

    }
    case GetTodo:{
        return{
        ...state,
        todos:[ ...state.todos, payload],
        }

    }

    case DeleteTodo:{
        return{
        ...state,
        todos:state.todos.filter((el)=> el.id!==payload)
        }

    }

    case  UpdateTodo:{
        const updateTodo=state.todos.map((todo)=>{
             if(todo===payload.id){
            return{
                ...todo,
                ...payload.changes
            }
            }
           return todo
           
        })
        return {
            ...state,
            todos:updateTodo
        }
    }


    default:{
return state;

}
}
}

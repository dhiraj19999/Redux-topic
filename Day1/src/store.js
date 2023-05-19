import {legacy_createStore} from 'redux'
import { INC,DEC,ADD_Todo,DeleteTodo,UpdateTodo } from './redux/Action.types.js'



let intialState={
    a:1,
    count:0,
    todo:[]
}




const reducerFn=(state=intialState,{type,payload})=>{

switch(type){

    case "update":{
        return {
            ...state,
            a:payload
        }
    }
    case INC:{
        return {
            ...state,
            count:state.count+1
        }
    }
    case DEC:{
        return {
            ...state,
            count:state.count-1
        }
    }
    case ADD_Todo:{
        return {
            ...state,
            todo:[...state.todo,payload]
        }
    }
    case DeleteTodo:{
        const fliterTodo=state.todo.filter((todo)=>todo!==payload)
        return {
            ...state,
            todo:fliterTodo
        }
    }
    case UpdateTodo:{
        const updateTodo=state.todo.map((todo)=>{
             if(todo===payload.name){
                todo= payload.up
            }
            return todo
           
        })
        return {
            ...state,
            todo:updateTodo
        }
    }

default:{
    return state
}
}
}


export const store=legacy_createStore(reducerFn)
import { ADD_Todo,INC,DEC,DeleteTodo,UpdateTodo } from "./Action.types.js"
import { store } from "../store.js"
export const fun1=()=>{

    
    store.dispatch({type:'update',payload:4})
   
   
   
    console.log(store.getState())
}

export const Inc=()=>{
 store.dispatch({type:INC})
  console.log(store.getState())
}

export const AddTodo=(name)=>{
    store.dispatch({type:ADD_Todo,payload:name})
    console.log(store.getState())

}

export const deleteTodo=(name)=>{
    store.dispatch({type:DeleteTodo,payload:name})
    console.log(store.getState())


}

export const Update=(name,up)=>{
    store.dispatch({type:UpdateTodo,payload:{
        name,
        up
    }})
    console.log(store.getState())
}
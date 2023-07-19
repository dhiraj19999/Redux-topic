
import { ADDTODO,GETTODO,DELETETODO } from "./todo.actionTypes"


import { getTodoapi } from "./todo.Api"


export const addTodo=(payload)=>({

    type:ADDTODO,
    payload
    })

    
    export const deleteTodo=(payload)=>({

        type:DELETETODO,
        payload
        })

        export const getTodo=async(dispatch)=>
       
      {

        let data= await getTodoapi()
        dispatch( {


            type:GETTODO,
            payload:data
            })
      }
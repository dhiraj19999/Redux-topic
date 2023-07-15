import { GetTodo,DeleteTodo,AddTodo,UpdateTodo } from "./actionTypes";





export const getTodos=()=>{

return {

    type:GetTodo,
    payload:[
        {
            id:1,value:"item1",isCompleted:true,
        },
        {
            id:2,value:"item2",isCompleted:false,
        }
    ]
}

}
  
  
    export const addTodo = (value) => ({
    type: AddTodo,
    payload: {
    id: Date.now(),
    value,
    isCompleted: false,}
   
    })
   
    export const deleteTodo = (id) => ({ type:DeleteTodo, payload: id});


   
    export const updateTodos = (id, changes) => ({
        type: UpdateTodo,
        payload: {
        id,
        changes}})
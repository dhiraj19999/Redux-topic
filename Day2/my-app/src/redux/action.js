import { GetTodo,DeleteTodo,AddTodo,UpdateTodo } from "./actionTypes";





export const getTodos = () => ({
    type:GetTodo,
    payload:[
    { id: 1, value: "Item 1", isCompleted: true },
    { id: 2, value: "Item 2", isCompleted: false }]
    })
  
  
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
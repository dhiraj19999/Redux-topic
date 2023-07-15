import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, getTodos, updateTodos } from './redux/action';
import { useDispatch } from 'react-redux';
import { store } from './redux/store';
import { UpdateTodo } from './redux/actionTypes';
function App() {

  const[tod,setTod]=useState("") 
    const disPatch=useDispatch()
const todos=useSelector((store)=>store.todos)
console.log(todos)

useEffect(()=>{
  disPatch(getTodos())
},[disPatch])

  return (
    <div className="App">
      <input onChange={(e)=>setTod(e.target.value)}/>
      <button onClick={()=>disPatch(addTodo(tod))}>Add</button>




<div>
  {
    todos.map((el)=>{
      return <div key={el.id}> <h1 >{el.value} == {el.isCompleted?"Completed":"not Completed"}</h1>
      <button onClick={()=>disPatch(deleteTodo(el.id))}>Delete</button>
      <button onClick={()=>disPatch(updateTodos(el.id,{
        isCompleted:!el.isCompleted
      }))}>UpdateTodo</button>
      </div>
     
    })
  }
</div>
      
    </div>
  );
}

export default App;

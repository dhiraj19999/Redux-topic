import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, getTodos, updateTodos } from './redux/action';
import { useDispatch } from 'react-redux';
import { store } from './redux/store';
function App() {

  const[tod,setTod]=useState("")
  const dispatch=useDispatch()
  const todo=useSelector((store)=>{
   
    return store.todos
  })
  
useEffect(()=>{

  dispatch(getTodos())
},[])

  return (
    <div className="App">
      <input onChange={(e)=>setTod(e.target.value)}/>
      <button onClick={()=>{
        dispatch(addTodo(tod))
      }}>Add</button>





      {
        todo.map((el)=>{
         return <div key={el.id}>
          <h3 >{el.value} "===" {el.isCompleted?"Completed":"Not Completed"}</h3>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>DeleteTodo</button>
          <button onClick={()=>dispatch(updateTodos(el.id,{isCompleted:!el.isCompleted}))}>UpdateTodo</button>
          </div>
        })
      }
    </div>
  );
}

export default App;

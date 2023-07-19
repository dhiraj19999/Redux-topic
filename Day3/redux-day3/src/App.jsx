
import { counterInc,counterDec } from './redux/counter/counter.action'
import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getTodo } from './redux/todo/todo.action'

 function App(){
 const dispatch=useDispatch()
const count =useSelector((store)=>store.counterManager.count)
const todo =useSelector((store)=>store.todoManager.todos)

useEffect(()=>{
getTodo(dispatch)
},[])

return (
    <>
    {
      todo.map((todo)=>{
        return <h1 key={todo.id}>{todo.value}</h1>
      })
    }
     <button onClick={()=>dispatch(counterInc())}>INC</button>
     <h1> {count}</h1>
     <button onClick={()=>dispatch(counterDec())}>DEC</button>
    </>
  )
}

export default App

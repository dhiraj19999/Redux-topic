import axios from "axios";



export const getTodoapi=async()=>{

const response=await axios.get(" http://localhost:8080/todos");
return response.data
}
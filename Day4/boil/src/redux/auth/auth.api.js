import axios from "axios";


export const loginapi=async (creds)=>{

let res=await axios.post("https://reqres.in/api/login", creds)

return res.data

}
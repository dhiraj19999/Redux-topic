

import axios from "axios";

 export let getpostapi=async()=>{


    let res= await axios.get("http://localhost:8080/posts")
      
    return res.data
 
  }


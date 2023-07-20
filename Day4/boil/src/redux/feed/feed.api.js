
import axios from "axios";

 export let getFeedapi=async()=>{


    let res= await axios.get("http://localhost:8080/feeds")
      
    return res.data
 
  }


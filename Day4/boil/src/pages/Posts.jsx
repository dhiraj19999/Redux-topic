import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPosts } from "../redux/posts/posts.actions";
import{useSelector,useDispatch} from 'react-redux'
const Posts = () => {
  
  let dispatch=useDispatch()
  const {data,error,loading}=useSelector((store)=>store.postManager)
  useEffect(() => {
    if(data.length===0){
      dispatch(getPosts())
    }
  
  }, []);
  return (
    <div>
      <h1>Post</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;

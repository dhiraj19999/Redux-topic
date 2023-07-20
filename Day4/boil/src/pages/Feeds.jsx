import React, { useEffect, useState } from "react";
import{useSelector,useDispatch} from 'react-redux'
import axios from "axios";
//import { getFeedapi } from "../redux/feed/feed.api";
import { getFeeds } from "../redux/feed/feed.actions";

const Feeds = () => {
  let dispatch=useDispatch()
const {data,error,loading}=useSelector((store)=>store.feedManager)



  useEffect(() => {
    if(data.length===0){
      dispatch(getFeeds())
    }
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;

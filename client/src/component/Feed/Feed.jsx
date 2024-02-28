import React, { useContext, useEffect, useState } from 'react';
// import { Posts } from '../../UserData'
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';

function Feed({username}) {
  const [posts,setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get(`/posts/${user._id}/allposts`);
      setPosts(res.data);
    }
    fetchPosts();
  },[username,user._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share/>
          {
            posts.map(ele=>{
              return <Post key={ele._id} p={ele}/>
            })
          }
      </div>
    </div>
  )
}

export default Feed

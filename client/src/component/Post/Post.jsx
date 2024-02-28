import { MoreVert } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
// import { Users } from '../../UserData'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { format } from 'timeago.js';
import { AuthContext } from '../../context/AuthContext';
import './Post.css';
// import heart from '/images/heart.jfif'
// import likes from '/images/like.jfif'

function Post({p}) {
  const [like,setLike] = useState(p.likes.length)
  const [isLiked,setisLiked] = useState(0)
  const [Users,setUsers] = useState({});
  const [newDate,setNewDate] = useState("");

  const {user:CurrentUser} = useContext(AuthContext);  //destructuring the object

  useEffect(()=>{
    if(p.likes.includes(CurrentUser._id))
      setisLiked(1);
  },[CurrentUser._id,p.likes])

  useEffect(()=>{
    const fetchUsers = async () => {
      const res = await axios.get(`/users?userId=${p.userId}`);
      setUsers(res.data);
      const date = p.createdAt;
      setNewDate(date)
    }
    fetchUsers();
  },[p.userId])

  function Increase(){
    try
    {
      axios.put("/posts/"+p._id+"/like",{userId:CurrentUser._id})
    }
    catch(err)
    {}
    if(isLiked===0)
    {
      setisLiked(1);
      setLike(like+1);
    }
    else
    {
      setisLiked(0);
      setLike(like-1);
    }
  }

  return (
    <div className='post'>
      <div className='postwrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <NavLink to = {`/profile/${Users.username}`}>
                  <img 
                  src={Users.profilePicture||"../images/user.jpg"} 
                  alt="" className="postProfileImage"/>
                </NavLink>
                <span className='postUserName'>
                {
                  Users.username
                }
                </span>
                <span className='postDate'>
                {
                  format(newDate)
                }
                </span>
            </div>
            <div className='postTopRight'>
                <MoreVert className='MoreOptions'/>
            </div>
        </div>
        <div className='postCenter'>
            <span className='postText'>{p?.desc}</span>
            <img src={p.img} alt="" className='postImage'/>
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
                <img src='/images/like.jfif' alt="" className='LikeIcon' onClick={Increase}/>
                <img src='/images/heart.jfif' alt="" className='LikeIcon' onClick={Increase}/>
                <span className="LikeCounter">{like} people like it!</span>
            </div>
            <div className='postBottomRight'>
                <span className='comment'>{p.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post

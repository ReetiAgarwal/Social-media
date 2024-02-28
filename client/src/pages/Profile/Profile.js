import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Feed from '../../component/Feed/Feed';
import Rightbar from '../../component/Rightbar/Rightbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import Topbar from '../../component/Topbar/Topbar';
import './Profile.css';
// import profile from '/images/profileImage.jfif';

function Profile() {
  const [user,setuser] = useState({});
  const username = useParams().username;

  useEffect(()=>{
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setuser(res.data);
    }
    fetchUser();
  },[username])

  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className='profileRight'>
            <div className='profileRightTop'>
              <div className='profileCover'>
                  <img src = {user.profilePicture||"/images/profileImage.jfif"} alt="" className="profileTopImage"/>
                  <img src = {user.coverPicture||"/images/user.jpg"} alt="" className="profileCircleImage"/>
              </div>
              <div className='profileInfo'>
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className='profileRightBottom'>
                <Feed username = {username}/>
                <Rightbar u={user}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile

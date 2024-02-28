// import axios from "axios";
import React from 'react';
import { Users } from '../../UserData';
import Online from '../Online/Online';
import './Rightbar.css';
// import ad from '/images/ad.jfif'
// import gift from '/images/gift.jfif'
// import user1 from '/images/user1.jfif'
// import user2 from '/images/user2.jfif'
// import user3 from '/images/user3.jfif'
// import user4 from '/images/user4.jfif'

function Rightbar({u}) {
  
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthday'>
          <img src='/images/gift.jfif' alt="" className="birthdayImage"/>
          <span className='birthdayText'><b>Diya</b> and <b>2 other friends</b> have a birthday today.</span>
        </div>
        <img className='Ad' src='/images/ad.jfif' alt=""/>
        <h4 className='Title'>Online friends</h4>
        <ul className='FriendList'>
        {
          Users.map(ele=>{
            return <Online key={ele.id} user={ele}/>
          })
        }
        </ul>
      </>
    )
  };

  const ProfileRightbar = () => {

    // let friend=[];
    // if(u.username)
    // {
    //   u.followings.forEach(async (id)=>{
    //       const f = await axios.get(`/users?userId=${id}`);
    //       friend.push(f.data);
    //   })
    // }
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City : </span>
            <span className='rightbarInfoValue'>{u.city||"NA"}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From : </span>
            <span className='rightbarInfoValue'>{u.from||"NA"}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship : </span>
            <span className='rightbarInfoValue'>{u.relationship||"NA"}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarfollowings">
          {/* {
            friend.forEach(function(f)
            {
              {console.log(f)}
              <div className="rightbarfollowing">
              <img src={f.profilePicture||'/images/user.jpg'} alt=" " className='followingimage'/>
              <span className="followingName">{f.username}</span>
              </div>
            })
          } */}
          <div className="rightbarfollowing">
            <img src='/images/user1.jfif' alt=" " className='followingimage'/>
            <span className="followingName">Sita</span>
          </div>
          <div className="rightbarfollowing">
            <img src='/images/user2.jfif' alt=" " className='followingimage'/>
            <span className="followingName">Geeta</span>
          </div>
          <div className="rightbarfollowing">
            <img src='/images/user3.jfif' alt=" " className='followingimage'/>
            <span className="followingName">Arya</span>
          </div>
          <div className="rightbarfollowing">
            <img src='/images/user4.jfif' alt=" " className='followingimage'/>
            <span className="followingName">Chetna</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className='rightwrapper'>
        {
          u?<ProfileRightbar/>:<HomeRightbar/>
        }
      </div>
    </div>
  )
}

export default Rightbar

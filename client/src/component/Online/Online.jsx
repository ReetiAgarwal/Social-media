import React from 'react'
import './Online.css'

function Online({user}) {
  return (
    <div>
      <li className='Friend'>
            <div className='profileImageContainer'>
              <img className="FriendprofileImage" src={user.profilePicture} alt=""/>
              <span className='OnlineFriends'></span>
            </div>
            <span className='OnlineUserName'>{user.userName}</span>
        </li>
    </div>
  )
}

export default Online

import React from 'react'
import './CloseFriends.css'

function CloseFriends({user}) {
  return (
    <li className='Friend'>
        <img src={user.profilePicture||'/images/user.jpg'} alt=" " className='friendImage'/>
        <span className='friendName'>{user.userName}</span>
    </li>
  )
}

export default CloseFriends

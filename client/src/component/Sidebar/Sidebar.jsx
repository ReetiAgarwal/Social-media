import { Bookmark, Chat, Event, Groups, Help, PlayCircle, RssFeed, Work } from '@mui/icons-material'
import React from 'react'
import { Users } from '../../UserData'
import CloseFriends from '../CloseFriends/CloseFriends'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <ul className='list'>
            <li className='listItems'>
                <RssFeed/>
                <span className='text'>Feed</span>
            </li>
            <li className='listItems'>
                <Chat/>
                <span className='text'>Chat</span>
            </li>
            <li className='listItems'>
                <PlayCircle/>
                <span className='text'>Videos</span>
            </li>
            <li className='listItems'>
                <Groups/>
                <span className='text'>Groups</span>
            </li>
            <li className='listItems'>
                <Bookmark/>
                <span className='text'>Bookmarks</span>
            </li>
            <li className='listItems'>
                <Help/>
                <span className='text'>Questions</span>
            </li>
            <li className='listItems'>
                <Work/>
                <span className='text'>Jobs</span>
            </li>
            <li className='listItems'>
                <Event/>
                <span className='text'>Events</span>
            </li>
        </ul>
        <button className='more'>Show More</button>
        <hr className="hr"/>
        <ul className='FriendList'>
            {
                Users.map((ele)=>
                {
                    return <CloseFriends key={ele.id} user={ele}/>
                }
                )
            }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

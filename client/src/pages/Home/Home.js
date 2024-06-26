import React from 'react';
import Feed from '../../component/Feed/Feed';
import Rightbar from '../../component/Rightbar/Rightbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import Topbar from '../../component/Topbar/Topbar';
import './Home.css';

function Home() {
  return (
    <>
      <Topbar/>
      <div className="middle">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home

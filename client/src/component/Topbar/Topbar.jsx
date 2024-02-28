import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Topbar.css';
// import profile from '/images/profileImage.jfif';

function Topbar() {
  const {user} = useContext(AuthContext);

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
        <NavLink
        to="/"
        className="logo"
        alt="home-button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        >
          SocioApp
        </NavLink>
        </div>
      </div>
      <div className="center">
        <div className="SearchBar">
          <SearchRoundedIcon className="searchIcon"/>
          <input placeholder="Search Here" className="SearchInput"/>
        </div>
      </div>
      <div className="right">
        <div className="links">
          <span className="link">
            <NavLink
              to="/"
              className="anchor-item"
              alt="home-button"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </NavLink>
          </span>
          <span className="link">TimeLine</span>
        </div>
        <div className="icons">
          <div className="icon">
            <PersonRoundedIcon/>
            <span className="Badge">1</span>
          </div>
          <div className="icon">
            <ModeCommentRoundedIcon/>
            <span className="Badge">1</span>
          </div>
          <div className="icon">
            <NotificationsNoneRoundedIcon/>
            <span className="Badge">1</span>
          </div>
        </div>
        <NavLink
          to={`/profile/${user.username}`}
          alt="profile-button"
          className="anchor-item"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={user.profilePicture? user.profilePicture : '/images/user.jpg'} alt = "" className="image"></img>
        </NavLink>
      </div>
    </div>
  )
}

export default Topbar

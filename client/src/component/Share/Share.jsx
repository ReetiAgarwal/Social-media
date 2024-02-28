import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import './Share.css';
// import profileImage from '/images/profileImage.jfif'

function Share() {
  const {user} = useContext(AuthContext);
  return (
    <div className='share'>
      <div className='sharewrapper'>
        <div className='shareTop'>
            <img src={user.profilePicture ? user.profilePicture : "/images/user.jpg"} alt="" className="profilePicture"/>
            <input
                placeholder={`What's in your mind ${user.username} ?`}
                className = "shareInput"
            />
        </div>
        <hr className='sharehr'/>
        <div className='shareBottom'>
            <div className='shareOptions'>
                <div className='options'>
                    <PermMedia htmlColor="red" className='shareIcon'/>
                    <span className="OptionText">Photo or Video</span>
                </div>
                <div className='options'>
                    <Label htmlColor="blue" className='shareIcon'/>
                    <span className="OptionText">Tag</span>
                </div>
                <div className='options'>
                    <Room htmlColor="green" className='shareIcon'/>
                    <span className="OptionText">Location</span>
                </div>
                <div className='options'>
                    <EmojiEmotions htmlColor="goldenrod" className='shareIcon'/>
                    <span className="OptionText">Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share

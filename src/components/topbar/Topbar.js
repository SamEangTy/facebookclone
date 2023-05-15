import React from 'react'
import { Search, Person, Chat, NotificationAdd,  } from "@mui/icons-material";
import './topbar.css'
function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <div className="logo">Facebook</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
                <Search className='searchIcon'/>
                <input placeholder='Search for friends, post, video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className='topbarLink'>HomePage</span>
            <span className='topbarLink'>TimeLine</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <NotificationAdd/>
                <span className="topbarIconBadge">3</span>
            </div>
        </div>
        <img className='topbarImg' src="/assets/person/3.jpg" alt="" />
      </div>
    </div>
  )
}

export default Topbar

import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const handleKeyDown = (props) => {
    if (props.key === "Enter") {
      window.location=`/search/${inputSearch}`; 
       
    }
  }

  return (
    <div className="header">
      {/* menu icon */}
      <div className="header__left">
        <MenuSharpIcon className="header__menu" />
        <Link to="/">
          <div className="header__logo">
            <YouTubeIcon className="header_logo" />
            <div className="header_logoname">YouTube</div>
          </div>
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          onKeyDown={handleKeyDown}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        {/* <AppsSharpIcon className="header__icon" />   hide and use when size 778px*/}
        <NotificationsSharpIcon className="header__icon" />
        <Avatar
          alt="Azim Memon"
          src="https://avatars.githubusercontent.com/u/76033628?s=400&u=d957ceaedb6237ebe0b6b1d1869fdaedd6afccef&v=4"
        />
      </div>
    </div>
  );
};

export default Header;

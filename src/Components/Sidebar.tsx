import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import './SidebarOption.css';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOption text="Home" Icon={HomeIcon} active={false} />
      <SidebarOption text="Search" Icon={SearchIcon} active={false}/>
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} active={false}/>
      <SidebarOption text="Messages" Icon={MailOutlineIcon} active={false}/>
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} active={false}/>
      <SidebarOption text="Lists" Icon={ListAltIcon} active={false}/>
      <SidebarOption text="Profile" Icon={PermIdentityIcon} active={false}/>
      <SidebarOption text="More" Icon={MoreHorizIcon} active={false}/>
    </div>
  );
}

export default Sidebar;
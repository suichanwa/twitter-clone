import React, { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Badge } from "@material-ui/core";
import '../Styles/Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link, useLocation } from 'react-router-dom';
import { getUnreadNotificationCount } from "../services/notificationService";
import { auth } from "../firebase";

const Sidebar = () => {
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        if (auth.currentUser) {
          const count = await getUnreadNotificationCount();
          setUnreadNotifications(count);
        }
      } catch (error) {
        console.error("Error fetching notification count:", error);
      }
    };

    fetchUnreadCount();
    
    // Set up interval to check for new notifications
    const interval = setInterval(fetchUnreadCount, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <Link to="/home" className="sidebar__link">
        <SidebarOption text="Home" Icon={HomeIcon} active={isActive("/home")} className="font-link"/>
      </Link>
      <Link to="/notifications" className="sidebar__link">
        <Badge badgeContent={unreadNotifications} color="secondary" invisible={unreadNotifications === 0}>
          <SidebarOption 
            text="Notifications" 
            Icon={NotificationsNoneIcon} 
            active={isActive("/notifications")} 
            className="font-link"
          />
        </Badge>
      </Link>
      <Link to="/messages" className="sidebar__link">
        <SidebarOption text="Messages" Icon={MailOutlineIcon} active={isActive("/messages")} className="font-link"/>
      </Link>
      <Link to="/bookmarks" className="sidebar__link">
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} active={isActive("/bookmarks")} className="font-link"/>
      </Link>
      <Link to="/lists" className="sidebar__link">
        <SidebarOption text="Lists" Icon={ListAltIcon} active={isActive("/lists")} className="font-link" />
      </Link>
      <Link to="/profile" className="sidebar__link">
        <SidebarOption text="Profile" Icon={PermIdentityIcon} active={isActive("/profile")} className="font-link"/>
      </Link>
      <SidebarOption text="More" Icon={MoreHorizIcon} active={false} className={"font-link"}/>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
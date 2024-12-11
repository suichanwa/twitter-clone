import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import '../Styles/Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <Link to="/home" className="sidebar__link"><SidebarOption text="Home" Icon={HomeIcon} active={false} className="font-link"/></Link>
      <Link to="/notifications" className="sidebar__link"><SidebarOption text="Notifications" Icon={NotificationsNoneIcon} active={false} className="font-link"/></Link>
      <Link to="/messages" className="sidebar__link"><SidebarOption text="Messages" Icon={MailOutlineIcon} active={false} className="font-link"/></Link>
      <Link to="/bookmarks" className="sidebar__link"><SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} active={false} className="font-link"/></Link>
      <Link to="/lists" className="sidebar__link"><SidebarOption text="Lists" Icon={ListAltIcon} active={false} className="font-link" /></Link>
      <Link to="/profile" className="sidebar__link"><SidebarOption text="Profile" Icon={PermIdentityIcon} active={false} className="font-link"/></Link>
      <SidebarOption text="More" Icon={MoreHorizIcon} active={false} className={"font-link"}/>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
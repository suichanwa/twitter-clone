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
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";


const Sidebar = () => {
  let component;

  switch(window.location.pathname){
      case "/":
        component = <Home />;
        break;
      case "/profile":
        component = <Profile />;
        break;
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <Router>
        {component}
        <Link to="/home" replace={true}><SidebarOption text="Home" Icon={HomeIcon} active={false} className="font-link"/></Link>
        <Link to="/notifications" replace={true}><SidebarOption text="Notifications" Icon={NotificationsNoneIcon} active={false} className="font-link"/></Link>
        <Link to="/messages" replace={true}><SidebarOption text="Messages" Icon={MailOutlineIcon} active={false} className="font-link"/></Link>
        <Link to="/bookmarks" replace={true}><SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} active={false} className="font-link"/></Link>
        <Link to="/lists" replace={true}><SidebarOption text="Lists" Icon={ListAltIcon} active={false}className="font-link" /></Link>
        <Link to="/profile" replace={true}><SidebarOption text="Profile" Icon={PermIdentityIcon} active={false} className="font-link"/></Link>
        <SidebarOption text="More" Icon={MoreHorizIcon} active={false} className={"font-link"}/>

        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>

      </Router>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
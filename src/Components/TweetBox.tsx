import { Avatar, Button } from "@material-ui/core";
import "../Styles/TweetBox.css";
import { AvatarIcon } from "./AvatarIcon";


function TweetBox(){
  return(
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={AvatarIcon}/>
          <input placeholder="What's happening?" type="text" className="inputts"/>
        </div>
        <Button className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox;
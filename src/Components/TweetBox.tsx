import { Avatar, Button } from "@material-ui/core";
import "../Styles/TweetBox.css";
import { AvatarIcon } from "./AvatarIcon";
import { db } from "../db/Firebase";
import React from "react";
import {collection, getDocs} from "firebase/firestore";

function TweetBox(){
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");
  const userCollectionRef = collection(db, "posts");

  const sendTweet = (e: any) => {
    e.preventDefault();

   const getPosts = async() => {
      const data = await getDocs(userCollectionRef); 
      console.log(data);
    }
    getPosts();
  }
  //implement sendTweet
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
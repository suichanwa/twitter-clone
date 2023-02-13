import { Avatar, Button } from "@material-ui/core";
import "../Styles/TweetBox.css";
import { AvatarIcon } from "./AvatarIcon";
import { db } from "../db/Firebase";
import React from "react";
import {collection, doc } from "firebase/firestore";
import { sendTweetProps } from "../types/Types";

function TweetBox(){
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [tweetImage, setTweetImage] = React.useState("");
  const userCollectionRef = collection(db, "posts");

  //write function sendTweet to send tweet to firebase

  const sendTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTweet: sendTweetProps = {
      displayName: "suichanwa",
      username: "name",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: AvatarIcon,
    };
    
    /*
    userCollectionRef.add(newTweet);
    setTweetMessage("");
    setTweetImage("");
    */

  }
   
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
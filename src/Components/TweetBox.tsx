import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../db/Firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
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
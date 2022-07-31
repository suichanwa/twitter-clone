import React, {useState, useEffect} from "react";
import "../Styles/Feed.css";
import { Avatar, Button } from "@material-ui/core";
import TweetBox from './TweetBox'; 
import { db } from "../db/Firebase";
import 'firebase/firestore';
import * as firebase from 'firebase/app'
import {collection} from "firebase/firestore";

function Feed(){
    const [posts, setPost] = useState([]);
    return(
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
        </div>
    );
}

export default Feed;

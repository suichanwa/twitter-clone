import React, {useState, useEffect} from "react";
import "../Styles/Feed.css";
import { Avatar, Button } from "@material-ui/core";
import TweetBox from './TweetBox'; 

function Feed(){
    const [post, setPost] = useState([]);

    return(
        <div>
            <div className="feed">
                <h2>Home</h2>
            </div>
            <TweetBox />
        </div>
    );
}

export default Feed;

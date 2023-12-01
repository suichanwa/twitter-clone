import React from "react";
import "../Styles/Feed.css";
import TweetBox from './TweetBox'; 
import 'firebase/firestore';
import SearchBar from "./SearchBar";

function Feed(){
    return(
        <div className="">
            <div className="">
            </div>
            <SearchBar />
            <TweetBox />
        </div>
    );
}

export default Feed;

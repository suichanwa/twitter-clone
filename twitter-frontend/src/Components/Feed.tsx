import TweetBox from './TweetBox'; 
import SearchBar from "./SearchBar";

import "../Styles/Feed.css";
import 'firebase/firestore';

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

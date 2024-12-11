// src/Components/Feed.tsx
import React from 'react';
import TweetBox from './TweetBox';
import PostFormCard from './PostFormCard';
import '../Styles/Feed.css';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <PostFormCard />
      <TweetBox />
    </div>
  );
}

export default Feed;
import Sidebar from './Components/Sidebar';
import React, { useEffect, useState } from 'react';
import Feed from './Components/Feed';
import Post from './Components/Post';
import axios from 'axios';
import { AvatarIcon } from './Components/AvatarIcon';
import { tweetsDatas } from './types/Tweets';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  //show on the page all the tweets from the database
  useEffect(() => {
    axios.get('http://localhost:3000/tweets').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Post displayName={'suichanwa'} username={'suichanwa'} verified={false} text={'omfgg'} image={AvatarIcon} avatar={AvatarIcon}  />
      <Feed />
    </div>
  )

}

export default App;

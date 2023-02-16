import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Feed from './Components/Feed';
import Post from './Components/Post';
import { AvatarIcon } from './Components/AvatarIcon';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Post displayName={'suichanwa'} username={'name'} verified={false} text={'this is first post'} image={AvatarIcon} avatar={AvatarIcon} />
      <Feed />
    </div>
  );
}

export default App;

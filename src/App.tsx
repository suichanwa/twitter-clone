import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import Post from './Components/Post';
import { AvatarIcon } from './Components/AvatarIcon';

function App() {
  return (
    <div>
      <Feed />
      <Post displayName={'suichanwa'} username={'name'} verified={false} text={'this is first post'} image={AvatarIcon} avatar={AvatarIcon} />
      <Sidebar />
    </div>
  );
}

export default App;

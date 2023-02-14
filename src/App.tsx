import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import Post from './Components/Post';
import { AvatarIcon } from './Components/AvatarIcon';
import CommentForm from './Components/Comment/CommentForm';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Post displayName={'suichanwa'} username={'name'} verified={false} text={'this is first post'} image={AvatarIcon} avatar={AvatarIcon} />
      < CommentForm />
      <Feed />
    </div>
  );
}

export default App;

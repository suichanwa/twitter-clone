import Sidebar from './Components/Sidebar';
import { useEffect, useState } from 'react';
import Feed from './Components/Feed';
import Post from './Components/Post';
import axios from 'axios';
import { AvatarIcon } from './Components/AvatarIcon';
import './App.css';

function App() {
  const [data, setData] = useState([]);

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

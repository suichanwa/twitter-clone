import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div>
      <Feed />
      <Sidebar />
    </div>
  );
}

export default App;

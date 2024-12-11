// src/App.tsx
import React, { useContext } from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './Components/Feed';
import Profile from './Pages/Profile/Profile';
import Widgets from './Components/Widgets';
import ThemeSwitchButton from './Components/ThemeSwitchButton';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route path="/home" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Widgets />
        <ThemeSwitchButton />
      </Router>
    </div>
  );
}

export default App;
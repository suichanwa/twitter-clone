// src/App.tsx
import { useContext } from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Feed from './Components/Feed';
import Profile from './Pages/Profile/Profile';
import Notifications from './Pages/Notifications/Notifications';
import Auth from './Pages/Auth/Auth';
import Widgets from './Components/Widgets';
import ThemeSwitchButton from './Components/ThemeSwitchButton';
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Routes>
          <Route path="/auth" element={!currentUser ? <Auth /> : <Navigate to="/home" />} />
          
          <Route path="/" element={<Navigate to={currentUser ? "/home" : "/auth"} />} />
          
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <div className="app__main">
                  <Sidebar />
                  <div className="app__content">
                    <Feed />
                  </div>
                  <Widgets />
                  <ThemeSwitchButton />
                </div>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <div className="app__main">
                  <Sidebar />
                  <div className="app__content">
                    <Profile />
                  </div>
                  <Widgets />
                  <ThemeSwitchButton />
                </div>
              </PrivateRoute>
            } 
          />
          
          <Route 
            path="/notifications" 
            element={
              <PrivateRoute>
                <div className="app__main">
                  <Sidebar />
                  <div className="app__content">
                    <Notifications />
                  </div>
                  <Widgets />
                  <ThemeSwitchButton />
                </div>
              </PrivateRoute>
            } 
          />
          
          {/* Add other routes with the same pattern */}
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
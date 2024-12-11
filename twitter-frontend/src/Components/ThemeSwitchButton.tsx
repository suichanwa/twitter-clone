import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import '../Styles/ThemeSwitchButton.css';

const ThemeSwitchButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className="theme-switch-button">
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </Button>
  );
};

export default ThemeSwitchButton;
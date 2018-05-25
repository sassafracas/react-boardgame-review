import React from 'react';
import logo from '../assets/svg/logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Board Game Finder</h1>
    </header>
  )
}

export default Header;

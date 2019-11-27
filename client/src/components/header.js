import React from 'react';
import "../stylesheets/header.scss";
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header className="header">
      <div className='nav-item'>
        <Link to="/elements" className="nav-link">Elements</Link>
      </div>
      <div className='nav-item'>
        <Link to="/elements" className="nav-link">My Profile (broken)</Link>
      </div>
      <div className='nav-item'>
        <Link to="/elements" className="nav-link">Logout (broken)</Link>
      </div>
      <img src={require(`../images/logo.png`)} alt="logo" />
    </header>
  );
};

export default Header;
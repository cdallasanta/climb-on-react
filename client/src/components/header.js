import React from 'react';
import "../stylesheets/header.scss";
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <div class="header">
        <div class='nav-item'>
          <Link to="/elements" class="nav-link">Elements</Link>
        </div>
        <div class='nav-item'>
          <Link to="/elements" class="nav-link">My Profile (broken)</Link>
        </div>
        <div class='nav-item'>
          <Link to="/elements" class="nav-link">Logout (broken)</Link>
        </div>
        <img src="" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import "../stylesheets/header.scss";

const Header = () => {
  return(
    <header>
      <div class="header">
        <div class='nav-item'>
          <a href="/elements" class="nav-link">Elements</a>
        </div>
        <div class='nav-item'>
          <a href="/elements" class="nav-link">My Profile (broken)</a>
        </div>
        <div class='nav-item'>
          <a href="/elements" class="nav-link">Logout (broken)</a>
        </div>
        <img src="" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import "../stylesheets/header.scss";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

const Header = ({handleLogout}) => {
  return(
    <header className="header">
      <Router>
        <NavLink to="/preuse_inspections" className="nav-link" activeClassName="selected">Preuse Inspections</NavLink>
        <NavLink to="/periodic_inspections" className="nav-link" activeClassName="selected">Periodic Inspections</NavLink>
        <NavLink to="/elements" className="nav-link" activeClassName="selected">My Profile (broken)</NavLink>
        <NavLink to="/logout" className="nav-link" activeClassName="selected"
          onClick={handleLogout} >Logout</NavLink>
      </Router>
      
      <img src={require(`../images/logo.png`)} alt="logo" />
    </header>
  );
};

export default Header;
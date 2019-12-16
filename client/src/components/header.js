import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "../stylesheets/header.scss";
import { NavLink, withRouter } from 'react-router-dom';

class Header extends React.Component {
  state = {
    showAdminTools: false
  }

  handleHover = () => {
    this.setState({showAdminTools: true});
  }

  handleLeave = () => {
    this.setState({showAdminTools: false});
  }

  adminTools = () => {
    return (
      <div>
        <NavLink>Dashboard</NavLink>
        <NavLink>Elements</NavLink>
        <NavLink>Users</NavLink>
      </div>
    )
  }

  render(){
    return(
      <header className="header">
        <NavLink to="/admin" className="nav-link" activeClassName="selected"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}>Admin</NavLink>
        <NavLink to="/preuse_inspections" className="nav-link" activeClassName="selected">Preuse Inspections</NavLink>
        <NavLink to="/periodic_inspections" className="nav-link" activeClassName="selected">Periodic Inspections</NavLink>
        <NavLink to="/elements" className="nav-link" activeClassName="selected">My Profile (broken)</NavLink>
        <NavLink to="/logout" className="nav-link" activeClassName="selected"
          onClick={this.props.handleLogout} >Logout</NavLink>
        
        <img src={require(`../images/logo.png`)} alt="logo" />
      </header>
    )
  }
};

export default withRouter(Header);
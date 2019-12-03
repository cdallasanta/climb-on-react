import React, {Component} from 'react';
import { connect } from 'react-redux';
import "./stylesheets/global.scss";
import { withRouter } from 'react-router-dom';
import Home from './containers/home';
import Login from './containers/sessions/login';

class App extends Component {

  handleLogin = (data, remember = true) => {
    this.props.login(data);

    if(remember){
      localStorage.setItem("currentUser", JSON.stringify(data));
    }
  }

  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem("currentUser");
    this.props.history.push('/');
  }

  loginStatus = () => {
    if (localStorage.getItem("currentUser") !== null){
      this.props.login(JSON.parse(localStorage.getItem("currentUser")));
    } else {
      this.handleLogout();
    }
  }

  componentDidMount() {
    this.loginStatus();
  }

  componentDidUpdate(){
    console.log(this.props.location);
  }

  render() {
    if (this.props.logged_in) {
      return (
        <Home handleLogout={this.handleLogout} />
      );
    } else {
      return (
        <Login handleLogin={this.handleLogin} />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    logged_in: state.logged_in,
    current_user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch({type:"LOGIN", payload:user}),
    logout: () => dispatch({type:"LOGOUT"})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
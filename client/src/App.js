import React, {Component} from 'react';
import "./stylesheets/global.scss";
import { withRouter} from 'react-router-dom';
import axios from 'axios';
import Home from './containers/home';
import Login from './containers/sessions/login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: {}
    }
  }

  handleLogin = (data, remember = true) => {
    this.setState({
      isLoggedIn: true,
      currentUser: data.user
    });

    if(remember){
      localStorage.setItem("currentUser", JSON.stringify(data.user));
    }
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
    localStorage.removeItem("currentUser");
    this.props.history.push('/');
  }

  loginStatus = () => {
    if (localStorage.getItem("currentUser") !== null){
      this.handleLogin({
        loggedIn: true,
        user: JSON.parse(localStorage.getItem("currentUser"))
      });
    } else {
      this.handleLogout();
    }
    // axios.get('http://localhost:3001/logged_in')
    //   .then(resp => {
    //     if (resp.data.logged_in){
    //       this.handleLogin(resp);
    //     } else {
    //     }
    //   })
    //   .catch(error => console.log('api errors:', error));
  }

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
          <Home {...this.props} currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
      );
    } else {
      return (
          <Login {...this.props} handleLogin={this.handleLogin} />
      );
    }
  }
}

export default withRouter(App);

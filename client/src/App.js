import React, {Component} from 'react';
import "./stylesheets/global.scss";
import axios from 'axios';
import Home from './containers/home';
import Login from './containers/user/login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: false})
      .then(resp => {
        if (resp.data.logged_in){
          this.handleLogin(resp);
        } else {
          this.handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    if (this.state.isLoggedIn) {
      return (<Home {...this.props} currentUser={this.state.user} />);
    } else {
      return (<Login />);
    }
  }
}

export default App;

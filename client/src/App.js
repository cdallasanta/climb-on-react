import React, {Component} from 'react';
import "./stylesheets/global.scss";
import axios from 'axios';
import Home from './containers/home';
import Login from './containers/users/login';

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
    axios.get('/logged_in', {withCredentials: true})
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
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

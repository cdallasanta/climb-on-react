import React, {Component} from 'react';
import '../../stylesheets/sessions.scss';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: ""
    };
  }

  handleChange = event => {
    const {name, value} = event;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event =>{
    event.preventDefault();
    // more to do later
  }

  render() {
    const {email, password} = this.state;

    return(
      <div id="login-form-div">
        <h1>Welcome to<br />
        Climb On!</h1>

        <form onSubmit={this.handleSubmit} id="login-form">
          <input placeholder="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange} />

          <input placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange} />

          <button placeholder="submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    )
  }
};

export default Login;
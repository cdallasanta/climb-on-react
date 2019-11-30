import React, {Component} from 'react';
import '../../stylesheets/sessions.scss';
import { withRouter } from "react-router";
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      remember: false
    };
  }

  handleChange = event => {
    const {target} = event
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event =>{
    event.preventDefault();
    
    const {email, password, remember} = this.state;
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/login', {user}, {withCredentials: false})
      .then(resp => {
        if (resp.data.logged_in){
          this.props.handleLogin(resp.data, remember);
          this.redirect();
        } else {
          this.state({
            email: "",
            password: "",
            errors: "",
            remember: false
          });
          this.setState({errors: resp.data.errors});
        }
      })
      .catch(error => console.log('api error:', error));
  }

  redirect = () => {
    this.props.history.push('/');
  }

  handleErrors = () => {
    return (
      <div className="alert alert-danger">
        <ul>
          {this.state.errors.map(error =>{
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const {email, password, remember} = this.state;

    return(
      <div className="content">
        {this.state.errors ? this.handleErrors() : null}

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

            <input
              type="checkbox"
              name="remember"
              checked={remember}
              onChange={this.handleChange} />
            <label htmlFor="remember">Remember Me</label>

            <button placeholder="submit" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    )
  }
};

export default withRouter(Login);
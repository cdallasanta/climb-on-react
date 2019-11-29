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
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event =>{
    event.preventDefault();
    
    const {email, password} = this.state;
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(resp => {
        if (resp.data.logged_in){
          this.props.handleLogin(resp.data);
          this.redirect();
        } else {
          this.setState({errors: resp.data.errors});
        }
      })
      .catch(error => console.log('api error:', error));
  }

  redirect() {
    this.props.history.push('/');
  }

  handleErrors = () => {
    return (
      <div className="alert alert-warning">
        <ul>
          {this.state.errors.localeCompare(error =>{
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const {email, password} = this.state;

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

            <button placeholder="submit" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    )
  }
};

export default Login;
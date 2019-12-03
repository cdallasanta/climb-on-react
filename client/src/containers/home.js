import React, {Component} from 'react';
import { connect } from 'react-redux';
import "../stylesheets/global.scss";
import { Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import PreuseInspectionContainer from './inspections/preuseInspectionContainer';
import PeriodicInspectionContainer from './inspections/periodicInspectionContainer';
import Header from '../components/header';
import axios from 'axios';

class Home extends Component {
  componentDidMount(){
    axios.get(`http://localhost:3001/api/v1/sites/${this.props.currentUser.site_id}`)
    .then(response => this.props.setSite(response.data))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <Header handleLogout={this.props.handleLogout} />

        <div id="content">
          <Switch>
            <Route path="/preuse_inspections"
              component={PreuseInspectionContainer}
            />
            <Route path="/periodic_inspections"
              component={PeriodicInspectionContainer}
            />
            <Route path="/"
              component={Dashboard}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSite: (data) => dispatch({type: "SET_SITE", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

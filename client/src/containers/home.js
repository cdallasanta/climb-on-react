import React, {Component} from 'react';
import { connect } from 'react-redux';
import "../stylesheets/global.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import PreuseInspectionContainer from './inspections/preuseInspectionContainer';
import PeriodicInspectionContainer from './inspections/periodicInspectionContainer';
import Header from '../components/header';

class Home extends Component {
  render(){
    return (
      <div className="App">
        <Header />

        <div id="content">
            
          <Router>
            <Switch>
              <Route exact path="/preuse_inspections"
                component={PreuseInspectionContainer}
              />
              <Route exact path="/periodic_inspections"
                component={PeriodicInspectionContainer}
              />
              <Route exact path="/"
                component={Dashboard}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(Home);

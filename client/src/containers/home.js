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
        <Header  {...this.props} />

        <div id="content">
            
          <Router>
            <Switch>
              <Route exact path="/preuse_inspections"
                render={(props) => <PreuseInspectionContainer currentUser={props.currentUser} />}
              />
              <Route exact path="/periodic_inspections"
                render={(props) => <PeriodicInspectionContainer currentUser={props.currentUser} />}
              />
              <Route exact path="/"
                render={(props) => <Dashboard currentUser={props.currentUser} />}
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

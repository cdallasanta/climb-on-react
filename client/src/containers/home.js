import React, {Component} from 'react';
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
              <Route path="/preuse_inspections" render={props =>(
                <PreuseInspectionContainer {...props} />
              )} />
              <Route path="/periodic_inspections" render={props =>(
                <PeriodicInspectionContainer {...props} />
              )} />
              <Route path="/" render={props =>(
                <Dashboard {...props} currentUser={this.props.currentUser} />
              )} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default Home;

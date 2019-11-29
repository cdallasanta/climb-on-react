import React from 'react';
import "../stylesheets/global.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import PreuseInspectionContainer from './inspections/preuseInspectionContainer';
import PeriodicInspectionContainer from './inspections/periodicInspectionContainer';
import Header from '../components/header';

function Home() {
  return (
    <Router>
      <div className="App">
        <Header  {...this.props} />

        <div id="content">
          <Switch>
            <Route path="/preuse_inspections" component={PreuseInspectionContainer} {...this.props} />
            <Route path="/periodic_inspections" component={PeriodicInspectionContainer} {...this.props} />
            <Route path="/" component={Dashboard} {...this.props} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;

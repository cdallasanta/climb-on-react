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
        <Header />

        <div id="content">
          <Switch>
            <Route path="/preuse_inspections" component={PreuseInspectionContainer} {...props} />
            <Route path="/periodic_inspections" component={PeriodicInspectionContainer} {...props} />
            <Route path="/" component={Dashboard} {...props} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;

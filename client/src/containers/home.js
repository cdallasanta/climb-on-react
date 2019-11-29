import React from 'react';
import "./stylesheets/global.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './containers/dashboard';
import PreuseInspectionContainer from './containers/preuseInspectionContainer';
import PeriodicInspectionContainer from './containers/periodicInspectionContainer';
import Header from './components/header';

function Home() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div id="content">
          <Switch>
            <Route path="/preuse_inspections" component={PreuseInspectionContainer} />
            <Route path="/periodic_inspections" component={PeriodicInspectionContainer} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;

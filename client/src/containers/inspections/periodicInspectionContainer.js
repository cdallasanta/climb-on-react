import React, {Component} from 'react';
import ElementList from '../elementList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class PeriodicInspectionContainer extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/periodic_inspections/new" render={props =>(
                <ElementList {...props} />)} />
          <Route exact path="/periodic_inspections" render={props =>(
                <ElementList {...props} />)} />
        </Switch>
      </Router>
    )
  }
}

export default PeriodicInspectionContainer;
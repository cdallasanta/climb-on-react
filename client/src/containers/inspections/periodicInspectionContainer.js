import React, {Component} from 'react';
import ElementList from '../elementList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class PeriodicInspectionContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/periodic_inspections/new" component={ElementList} />
          <Route exact path="/periodic_inspections" component={ElementList} />
        </Switch>
      </Router>
    )
  }
}

export default PeriodicInspectionContainer;
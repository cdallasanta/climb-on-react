import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import ElementList from '../elementList';

class PeriodicInspectionContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/periodic_inspections"
          component={ElementList}
        />
        <Route exact path="/periodic_inspections/new"
          component={null}
        />
      </Switch>
    )
  }
}

export default PeriodicInspectionContainer;
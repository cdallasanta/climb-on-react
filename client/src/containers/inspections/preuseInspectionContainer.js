import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import ElementList from '../elementList';

class PreuseInspectionContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/preuse_inspections"
          component={ElementList}
        />
        <Route path="/preuse_inspections/new"
          component={null}
        />
      </Switch>
    )
  }
}

export default PreuseInspectionContainer;
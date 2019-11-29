import React, {Component} from 'react';
import ElementList from '../elementList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class PreuseInspectionContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/preuse_inspections/new" component={ElementList} />
          <Route exact path="/preuse_inspections" component={ElementList} />
        </Switch>
      </Router>
    )
  }
}

export default PreuseInspectionContainer;
import React, {Component} from 'react';
import Elements from './elements';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class PreuseInspectionContainer extends Component {
  render() {
    console.log(this.props.location);
    return (
      <Router>
        <Switch>
          <Route path="/preuse_inspections/new" component={Elements} />
          <Route exact path="/preuse_inspections" component={Elements} />
        </Switch>
      </Router>
    )
  }
}

export default PreuseInspectionContainer;
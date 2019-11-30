import React, {Component} from 'react';
import "../stylesheets/elements.scss";

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        Dashboard
        {this.props.currentUser.id}
      </div>
    )
  }
}

export default Dashboard;
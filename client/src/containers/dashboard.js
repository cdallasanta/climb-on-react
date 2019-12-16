import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../stylesheets/table.scss";

class Dashboard extends Component {
  state = {
    elements: []
  }

  componentDidMount() {
    axios.get(`/api/v1/sites/${this.props.currentUser.site_id}/status`)
    .then(response => this.setState({elements: response.data}))
    .catch(error => console.log(error))
  }

  renderElementTable = () => {
    if (Object.keys(this.state.elements).length > 0){
      return Object.keys(this.state.elements).map(element => {
        return <div className="table-row">
          <div className="td">{element}</div>
          <div className="td">{this.state.elements[element].setup}</div>
          <div className="td">{this.state.elements[element].takedown}</div>
        </div>
      })
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="table">
          <div className="table-head">
            <div className="th">Element</div>
            <div className="th">Today's Setup</div>
            <div className="th">Today's Takedown</div>
          </div>
          <div className="table-body">
            {this.renderElementTable()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Dashboard);
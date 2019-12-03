import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../stylesheets/elements.scss";
import ElementCard from '../components/elementCard';
import axios from 'axios';

class ElementList extends Component {
  state = {
    elements: []
  }

  // componentDidMount(){
  //   axios.get(`http://localhost:3001/api/v1/sites/${this.props.currentUser.site_id}/elements`)
  //   .then(response => this.setState({elements: response.data}))
  //   .catch(error => console.log(error))
  // }

  renderElements= () => {
    return this.state.elements.map(elem => {
      return <ElementCard data={elem} key={elem.id} location={this.props.location} />;
    });
  }

  render() {
    return (
      <div className="elements" id="elements-list">
        {/* {this.renderElements()} */}
        elementList
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(ElementList);
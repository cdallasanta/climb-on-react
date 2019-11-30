import React, {Component} from 'react';
import "../stylesheets/elements.scss";
import Element from '../components/elementCard';
import axios from 'axios';

class ElementList extends Component {
  state = {
    elements: []
  }

  componentDidMount(){
    debugger;
    axios.get('http://localhost:3001/api/v1/elements', {
      params: {
        user_id: this.props.currentUser.id
      }
    })
    .then(response => this.setState({elements: response.data}))
    .catch(error => console.log(error))
  }

  renderElements= () => {
    return this.state.elements.map(elem => {
      return <Element data={elem} key={elem.id} location={this.props.location} />;
    });
  }

  render() {
    return (
      <div className="elements" id="elements-list">
        {this.renderElements()}
      </div>
    )
  }
}

export default ElementList;
import React, {Component} from 'react';
import "../stylesheets/elements.scss";
import Element from '../components/elementCard';

class Elements extends Component {
  state = {
    elements: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/elements.json')
    .then(response => response.json())
    .then(data => this.setState({elements: data}))
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

export default Elements;
import React, {Component} from 'react';
import Element from '../components/element';

class Dashboard extends Component {
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
      return <Element data={elem} key={elem.id} />;
    });
  }

  render() {
    return (
      <div className="Dashboard">
        {this.renderElements()}
      </div>
    )
  }
}

export default Dashboard;
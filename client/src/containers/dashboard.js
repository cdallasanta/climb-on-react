import React, {Component} from 'react';
import "../stylesheets/elements.scss";
import Element from '../components/elementCard';

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
      <div className="dashboard">
        Dashboard
        {this.props.current_user.id}
      </div>
    )
  }
}

export default Dashboard;
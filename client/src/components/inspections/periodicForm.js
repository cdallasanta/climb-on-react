import React, {Component} from 'react';
import '../../stylesheets/periodic_inspections.scss';
import axios from 'axios';
import Section from './section';

class PeriodicForm extends Component {
  state = {
    date: new Date(),
    element: {},
    id: null,
    sections: [
      {complete: false},
      {complete: false},
      {complete: false}
    ]
  }

  handleToggle = ({target: {name, checked}}) => {
    this.setState(state => {
      const sections = state.sections.map((item, i) => {
        if (i == name) {
          return {...item, complete: checked};
        } else {
          return item;
        }
      });

      return {sections,};
    });
  }

  dateChange = event => {
    const elemId = this.props.match.params.element_id;
    axios.get(`http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/date/${event.target.value}`)
    .then(resp =>{
      this.setState(resp.data);
    })
  }

  componentDidMount(){
    const elemId = this.props.match.params.element_id;
    const date = this.state.date
    axios.get(`http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/date/${date}`)
      .then(resp =>{
        this.setState(resp.data);
      })
  }

  render() {
    return (
      <div id="periodic-inspection-form">
        <form>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" className="form-control-sm" value={this.state.date} onChange={this.dateChange} required />
          </div>

          <Section handleToggle={this.handleToggle.bind(this)}
            checked={this.state.sections[0].complete}
            instructions={this.state.element.element_instructions}
            title="Element"
            index="0" />
          <Section handleToggle={this.handleToggle.bind(this)}
            checked={this.state.sections[1].complete}
            instructions={this.state.element.equipment_instructions}
            title="Equipment"
            index="1" />
          <Section handleToggle={this.handleToggle.bind(this)}
            checked={this.state.sections[2].complete}
            instructions={this.state.element.environment_instructions}
            title="Environment"
            index="2" />

          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default PeriodicForm;
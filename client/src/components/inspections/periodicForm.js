import React, {Component} from 'react';
import {connect} from 'react-redux';
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
    ],
    users: []
  }

  handleToggle = ({target: {name, checked}}) => {
    this.setState(state => {
      const sections = state.sections.map((item, i) => {
        if (i === parseInt(name)) {
          return {...item, complete: checked};
        } else {
          return item;
        }
      });

      return {sections};
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

  updatedBy = () => {
    return this.state.users.map(user => {
      return user.fullname
    });
  }

  handleErrors = errors => {
    console.log(errors);
  }

  handleSubmit = event => {
    event.preventDefault();
    const elemId = this.state.element.id;
    const data = {
      id: this.state.id,
      date: this.state.date,
      sections_attributes: this.state.sections,
      current_user: this.props.currentUser
    }

    if (this.state.id){
      const url = `http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/${this.state.id}/edit`;
      axios.patch(url,{periodic_inspection: data, user_id: this.props.currentUser.id})
        .then(resp => {
          if(resp.status === 200){
            this.setState(resp.data);
          } else {
            this.handleErrors(resp.errors);
          }
        })
    } else {
      const url = `http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/`;
      axios.post(url,{periodic_inspection: data, user_id: this.props.currentUser.id})
        .then(resp => {
          if(resp.status === 200){
            this.setState(resp.data);
          } else {
            this.handleErrors(resp.errors);
          }
        })
    }
  }

  render() {
    return (
      <div id="periodic-inspection-form">
        <form onSubmit={this.handleSubmit.bind(this)} >
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

          <input type="submit" />

          {this.state.users.length <= 0 ? null :
            <div className="updated-by form-group">
              <h3>Updated by:</h3>
                {this.updatedBy()}
            </div>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PeriodicForm);
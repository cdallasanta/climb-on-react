import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../stylesheets/periodic_inspections.scss';
import axios from 'axios';
import Section from '../../components/inspections/section';

class PeriodicForm extends Component {
  state = {
    date: new Date(),
    element: {},
    id: null,
    sections: [],
    users: [],
    sections_attributes:[
      {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]},
      {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]},
      {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]}
    ]
  }

  resetTextboxes = () => {
    this.setState({
      sections_attributes:[
        {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]},
        {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]},
        {comments_attributes:[{content:"", user_id: this.props.currentUser.id}]}
      ]
    });
  }

  toggleCheckbox = ({target: {name, checked}}) => {
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

  handleCommentChange = event =>{
    const {name, value} = event.target;
    this.setState(state => {
      const sections = state.sections_attributes.map((item, i) => {
        if (i === parseInt(name)) {
          return {...item, comments_attributes: [{content: value, user_id:this.props.currentUser.id}]};
        } else {
          return item;
        }
      });
      return {...state, sections_attributes: sections};
    });
  }

  dateChange = event => {
    const elemId = this.props.match.params.element_id;
    axios.get(`http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/date/${event.target.value}`)
    .then(resp =>{
      if (resp.data.id !== null){
        this.props.history.push(`/periodic_inspections/elements/${elemId}/edit`);
      } else {
        this.props.history.push(`/periodic_inspections/elements/${elemId}/new`);
      }
      this.setState(resp.data);
      this.resetTextboxes();
    })
  }

  componentDidMount(){
    const elemId = this.props.match.params.element_id;
    const date = this.state.date
    axios.get(`http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/date/${date}`)
      .then(resp =>{
        if (resp.data.id !== null){
          this.props.history.push(`/periodic_inspections/elements/${elemId}/edit`);
        } else {
          this.props.history.push(`/periodic_inspections/elements/${elemId}/new`);
        }
        this.setState(resp.data);
        this.resetTextboxes();
      })
  }

  updatedBy = () => {
    if (this.state.users.length > 0) {
      return (
        <div className="updated-by form-group">
          <h3>Updated by:</h3>
          {this.state.users.map((user, i) => {
            return <React.Fragment key={i}>
              {user.fullname}<br/>
            </React.Fragment>
          })}
        </div>
      )
    }
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
      sections_attributes: [],
      current_user: this.props.currentUser
    }

    this.state.sections.forEach((section, i) =>{
      data.sections_attributes.push({
        ...section,
        comments_attributes: [this.state.sections_attributes[i].comments_attributes[0]]
      })
    });

    if (this.state.id){
      const url = `http://localhost:3001/api/v1/elements/${elemId}/periodic_inspections/${this.state.id}/edit`;
      axios.patch(url,{periodic_inspection: data, user_id: this.props.currentUser.id})
        .then(resp => {
          if(resp.status === 200){
            this.setState(resp.data);
            this.resetTextboxes();
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
            this.resetTextboxes();
            this.props.history.push(`/periodic_inspections/elements/${elemId}/edit`);
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

        {this.state.sections.length > 0 ?
          <>
          <Section toggleCheckbox={this.toggleCheckbox.bind(this)}
            handleChange={this.handleCommentChange}
            instructions={this.state.element.element_instructions}
            data={this.state.sections.find(s => s.title === "Element")}
            index="0"
            newComment={this.state.sections_attributes[0].comments_attributes[0].content} />
          <Section toggleCheckbox={this.toggleCheckbox.bind(this)}
            handleChange={this.handleCommentChange}
            instructions={this.state.element.equipment_instructions}
            data={this.state.sections.find(s => s.title === "Equipment")}
            index="1"
            newComment={this.state.sections_attributes[1].comments_attributes[0].content} />
          <Section toggleCheckbox={this.toggleCheckbox.bind(this)}
            handleChange={this.handleCommentChange}
            instructions={this.state.element.environment_instructions}
            data={this.state.sections.find(s => s.title === "Environment")}
            index="2"
            newComment={this.state.sections_attributes[2].comments_attributes[0].content} />
          </>
          : null}

          <input type="submit" />


          {this.updatedBy()}
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
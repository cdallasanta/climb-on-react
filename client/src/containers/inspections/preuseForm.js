import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../stylesheets/preuse_inspections.scss';
import axios from 'axios';
import Setup from '../../components/inspections/setup';
import Takedown from '../../components/inspections/takedown';

class PreuseForm extends Component {
  state = {
    date: new Date(),
    element: {},
    id: null,
    newComments: {
      setup:{
        equipment: {content: ""},
        element: {content: ""},
        environment: {content: ""}
      },
      takedown:{
        equipment: {content: ""},
        element: {content: ""},
        environment: {content: ""}
      }
    },
    alert_message: []
  }

  resetTextboxes = () => {
  //   this.setState({
  //     sections_attributes:[
  //       {comments_attributes:[{content:"", user_id: this.props.currentUser.id, title:"element"}]},
  //       {comments_attributes:[{content:"", user_id: this.props.currentUser.id, title:"equipment"}]},
  //       {comments_attributes:[{content:"", user_id: this.props.currentUser.id, title:"environment"}]}
  //     ]
  //   });
  }

  handleCheckboxToggle = event => {
    const {name, checked} = event.target;
    const inspection = event.target.getAttribute("inspection");

    this.setState(state => {
      const newAttrs = state[`${inspection}_attributes`];
      newAttrs.sections_attributes.find(s => s.title === name).complete = checked;
      return Object.assign({}, state, {[`${inspection}_attributes`]: newAttrs})
    });
  }

  handleCommentChange = event =>{
    const {name, value} = event.target;
    const inspection = event.target.getAttribute("inspection");

    this.setState(state => {
      const newComments = state.newComments;
      newComments[inspection][name].content = value;
      return Object.assign({}, state, {newComments: newComments})
    });
  }

  checkDateForInspection = date => {
    const elemId = this.props.match.params.element_id;
    axios.get(`http://localhost:3001/api/v1/elements/${elemId}/preuse_inspections/date/${date}`)
    .then(resp =>{
      if (resp.data.id !== null){
        this.props.history.push(`/preuse_inspections/elements/${elemId}/edit`);
        this.setState({alert_message: [{type:"info", message:"Previous inspection loaded"}]});
      } else {
        this.props.history.push(`/preuse_inspections/elements/${elemId}/new`);
        this.setState({alert_message: []});
      }
      this.setState(resp.data);
      this.resetTextboxes();
    })
  }

  componentDidMount(){
    this.checkDateForInspection(this.state.date);
  }

  renderUpdatedBy = () => {
    if (this.data) {
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

  // // TODO figure out how I want to handle server errors
  // handleErrors = errors => {
  //   console.log(errors);
  // }

  gatherDataFromState = () => {
    const data = {
      id: this.state.id,
      date: this.state.date,
      setup_attributes: this.state.setup_attributes,
      takedown_attributes: this.state.takedown_attributes,
      current_user: this.props.currentUser
    }

    for(const insp in this.state.newComments){
      for(const section_title in this.state.newComments[insp]){
        if (data[`${insp}_attributes`]){
          const section = data[`${insp}_attributes`].sections_attributes.find(s => s.title === section_title);

          section.comments_attributes.push({
            id: null,
            content: this.state.newComments[insp][section_title].content,
            user_id: data.current_user.id
          })
        }
      }
    }

    return data;
  }

  handleSubmit = event => {
    event.preventDefault();
    const elemId = this.state.element.id;
    const data = this.gatherDataFromState();

    if (this.state.id){
      const url = `http://localhost:3001/api/v1/elements/${elemId}/preuse_inspections/${this.state.id}`;
      axios.patch(url,{preuse_inspection: data, user_id: this.props.currentUser.id})
        .then(resp => {
          if(resp.status === 200){
            this.setState(resp.data);
            this.resetTextboxes();
            this.setState({alert_message: [{type:"success", message:"Inspection successfully updated"}]});
          } else {
            this.handleErrors(resp.errors);
          }
        })
    } else {
      const url = `http://localhost:3001/api/v1/elements/${elemId}/preuse_inspections/`;
      axios.post(url,{preuse_inspection: data, user_id: this.props.currentUser.id})
        .then(resp => {
          debugger;
          if(resp.status === 200){
            this.setState(resp.data);
            this.resetTextboxes();
            this.setState({alert_message: [{type:"success", message:"Inspection successfully logged"}]});
            this.props.history.push(`/preuse_inspections/elements/${elemId}/edit`);
          } else {
            this.handleErrors(resp.errors);
          }
        })
    }
  }

  renderAlert = () => {
    if (this.state.alert_message.length > 0) {
      const alert = this.state.alert_message[0];
      return (
        <div className={`alert alert-${alert.type}`}>
          <ul>
            <li>{alert.message}</li>
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderAlert()}

        <div id="periodic-inspection-form">
          <form onSubmit={this.handleSubmit.bind(this)} >
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" className="form-control-sm" value={this.state.date} onChange={event => this.checkDateForInspection(event.target.value)} required />
            </div>

            {this.state.setup_attributes ?
              <Setup data={this.state.setup_attributes}
                renderUpdatedBy={this.renderUpdatedBy}
                handleCheckboxToggle={this.handleCheckboxToggle.bind(this)}
                handleChange={this.handleCommentChange}
                element={this.state.element}
                newComments={this.state.newComments.setup}
              /> : null}

            {this.state.takedown_attributes ?
              <Takedown data={this.state.takedown_attributes}
                renderUpdatedBy={this.renderUpdatedBy}
                handleCheckboxToggle={this.handleCheckboxToggle.bind(this)}
                handleChange={this.handleCommentChange}
                element={this.state.element}
                newComments={this.state.newComments.takedown}
              /> : null}

            <input type="submit" />

          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PreuseForm);
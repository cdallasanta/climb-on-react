import React, {Component} from 'react';
import Section from '../../components/inspections/section';

class Setup extends Component {
  renderSections = () => {
    if (this.props.data !== undefined) {
      return <>
        <Section {...this.props}
          instructions={this.props.element.element_instructions}
          data={this.props.data.sections_attributes.find(s => s.title === "element")}
          handleChange={this.props.handleChange}
          index="0"
          newComment={this.props.newComments.element.content}
          inspection="setup" />
        <Section {...this.props}
          instructions={this.props.element.equipment_instructions}
          data={this.props.data.sections_attributes.find(s => s.title === "equipment")}
          handleChange={this.props.handleChange}
          index="1"
          newComment={this.props.newComments.equipment.content}
          inspection="setup" />
        <Section {...this.props}
          instructions={this.props.element.environment_instructions}
          data={this.props.data.sections_attributes.find(s => s.title === "environment")}
          handleChange={this.props.handleChange}
          index="2"
          newComment={this.props.newComments.environment.content}
          inspection="setup" />
      </>
    }
  }

  render(){
    return (
      <>
        {this.renderSections()}

        {this.props.renderUpdatedBy()}
      </>
    )
  }
}

export default Setup;
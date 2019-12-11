import React, {Component} from 'react';
import Section from '../../components/inspections/section';

class Takedown extends Component {
  renderSections = () => {
    return <>
      <Section {...this.props}
        instructions={this.props.element.element_instructions}
        data={this.props.data.sections_attributes.find(s => s.title === "Element")}
        handleChange={this.props.handleChange}
        index="0"
        newComment={this.props.newComments.Element.content}
        inspection="takedown" />
      <Section {...this.props}
        instructions={this.props.element.equipment_instructions}
        data={this.props.data.sections_attributes.find(s => s.title === "Equipment")}
        handleChange={this.props.handleChange}
        index="1"
        newComment={this.props.newComments.Equipment.content}
        inspection="takedown" />
      <Section {...this.props}
        instructions={this.props.element.environment_instructions}
        data={this.props.data.sections_attributes.find(s => s.title === "Environment")}
        handleChange={this.props.handleChange}
        index="2"
        newComment={this.props.newComments.Environment.content}
        inspection="takedown" />
    </>
  }

  render(){
    return (
      <div id="takedown-form">
        <h1>Takedown</h1>
        {this.renderSections()}

        {this.props.renderUpdatedBy()}
      </div>
    )
  }
}

export default Takedown;
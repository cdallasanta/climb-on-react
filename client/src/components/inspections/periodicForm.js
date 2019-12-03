import {React, Component} from 'react';
import '../../stylesheets/periodic_inspections.scss';

class PeriodicForm extends Component  {
  state = {}

  render(){
    return(
      <div id="periodic-inspection-form">
        <form>
          {/* <%= errors_check(inspection) %> */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" className="form-control-sm" required />
          </div>
          <div class="form-group">
          <h2>Equipment</h2>
            <div class="instructions-text">
              {/* <%= @element.periodic_equipment_instructions %> */}
            </div>
            <div class="form-check">
              {/* <%= f.check_box :equipment_complete, class:"form-check-input" %>
              <%= f.label "Section completed?", class: "form-check-label" %> */}
            </div>
          </div>
          {/* <div class="form-group">
            <h2>Element</h2>
            <div class="instructions-text"><%= @element.periodic_element_instructions %></div>
            <div class="form-check">
              <%= f.check_box :element_complete, class:"form-check-input" %>
              <%= f.label "Section completed?", class: "form-check-label" %>
            </div>
          </div>
          <div class="form-group">
            <h2>Environment</h2>
            <div class="instructions-text"><%= @element.periodic_environment_instructions %></div>
            <div class="form-check">
              <%= f.check_box :environment_complete, class:"form-check-input" %>
              <%= f.label "Section completed?", class: "form-check-label" %>
            </div>
          </div>

          <div class="form-group instructions-text">
            <%= render partial: 'comments', locals: {f:f, inspection:@inspection} %>
          </div>

          <%= updated_by_div(@inspection) %>

          <%= f.submit %> */}
        </form>
      </div>

    )
  }
}

export default PeriodicForm;
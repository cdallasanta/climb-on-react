module Api::V1
  class PeriodicInspectionsController < ApplicationController
    def find_by_date
      @insp = PeriodicInspection.find_or_init_past_inspection(
        date: Date.parse(params[:date]),
        element_id: params[:element_id]
      )

      if @insp.id == nil
        @insp.sections.new(title: "Element")
        @insp.sections.new(title: "Equipment")
        @insp.sections.new(title: "Environment")
      end

      render json: @insp
    end

    def create
      @inspection = PeriodicInspection.new(element_id: params[:element_id])
      current_user = User.find(params["user_id"])

      # if the inspection will change when saved, add the current user to be referenced by
      # 'edited by', and also reduced the number of calls to the db
      @inspection.assign_attributes(periodic_params)
      if @inspection.changed_for_autosave?
        @inspection.users << current_user unless @inspection.users.include?(current_user)
        if @inspection.save
          render json: @inspection
        else
          render json: {
            status: 400,
            errors: @inspection.errors.messages
          }
        end
      else
        render json: @inspection
      end
    end

    def edit
      binding.pry
    end

    private

    def periodic_params
      params.require(:periodic_inspection).permit(
        :id,
        :date,
        :sections_attributes => [
          :id,
          :title,
          :complete
        ]
      )
    end
  end
end
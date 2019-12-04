module Api::V1
  class PeriodicInspectionsController < ApplicationController
    def find_by_date
      @insp = PeriodicInspection.find_or_init_past_inspection(
        date: Date.parse(params[:date]),
        element_id: params[:element_id]
      )

      render json: @insp
    end
  end
end
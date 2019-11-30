module Api::V1
  class ElementsController < ApplicationController
    before_action :set_list, only: [:show, :update, :destroy]
  
    def index
      binding.pry
      @elements = Element.order(:id)
  
      render json: @elements
    end
  
  end
end
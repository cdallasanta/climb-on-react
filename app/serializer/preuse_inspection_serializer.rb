class PreuseInspectionSerializer < ActiveModel::Serializer
  attributes :date
  has_one :setup
  has_one :takedown
  belongs_to :element

  def element
    {
      id: object.element.id,
      name: object.element.name,
      element_instructions: object.element.periodic_element_instructions,
      equipment_instructions: object.element.periodic_equipment_instructions,
      environment_instructions: object.element.periodic_environment_instructions
    }
  end
end
class PeriodicInspectionSerializer < ActiveModel::Serializer
  attributes :id, :date, :sections
  has_many :users
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

  def sections
    ActiveModel::SerializableResource.new(object.sections,  each_serializer: SectionSerializer)
  end
end
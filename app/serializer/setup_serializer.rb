class SetupSerializer < ActiveModel::Serializer
  attributes :sections_attributes

  def sections_attributes
    ActiveModel::SerializableResource.new(object.sections,  each_serializer: SectionSerializer)
  end
end
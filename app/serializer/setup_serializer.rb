class SetupSerializer < ActiveModel::Serializer
  attributes :sections_attributes, :is_complete

  def sections_attributes
    ActiveModel::SerializableResource.new(object.sections,  each_serializer: SectionSerializer)
  end

  def is_complete
    !object.sections.any?{|s| s.complete == false}
  end
end
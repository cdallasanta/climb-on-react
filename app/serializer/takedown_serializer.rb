class TakedownSerializer < ActiveModel::Serializer
  attributes :sections_attributes, :ropes_attributes
  
  def sections_attributes
    ActiveModel::SerializableResource.new(object.sections,  each_serializer: SectionSerializer)
  end

  def ropes_attributes
    object.preuse_inspection.element.ropes.map do |rope|
      return {
        id: rope.id,
        identifier: rope.id,
        climbs_attributes: rope.climbs.where(takedown_id: object.id)
      }
    end
  end
end
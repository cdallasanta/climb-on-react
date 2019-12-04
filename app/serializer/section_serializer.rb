class SectionSerializer < ActiveModel::Serializer
  attributes :id, :complete, :title
  has_many :comments
end
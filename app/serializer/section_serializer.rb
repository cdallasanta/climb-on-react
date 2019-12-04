class SectionSerializer < ActiveModel::Serializer
  attributes :complete, :title
  has_many :comments
end
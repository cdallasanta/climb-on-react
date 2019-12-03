class Section < ApplicationRecord
  belongs_to :inspection, polymorphic: true
  has_many :comments, as: :commentable
  accepts_nested_attributes_for :comments
end

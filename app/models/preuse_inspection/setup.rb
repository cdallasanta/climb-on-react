class PreuseInspection::Setup < ApplicationRecord
  self.table_name = "setups"
  belongs_to :preuse_inspection
  has_many :user_setups, class_name: "JoinTable::UserSetups"
  has_many :users, through: :user_setups
  has_many :sections, as: :inspection
  has_one :element, through: :preuse_inspection
  accepts_nested_attributes_for :sections

  # only allows the creation of a takedown once each step of the setup is completed
  def is_complete?
    !self.attributes.any?{|attr, val| val == false}
  end
end

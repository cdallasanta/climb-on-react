class PeriodicInspection < ApplicationRecord
  belongs_to :element
  has_many :user_periodic_inspections, class_name: "JoinTable::UserPeriodicInspections"
  has_many :users, through: :user_periodic_inspections
  has_many :sections
  accepts_nested_attributes_for :sections

  validates :date, presence: true, uniqueness: {scope: :element}
  validates_presence_of :element

  after_initialize :set_defaults

  def set_defaults
    self.sections << Section.new(title: "Element")
    self.sections << Section.new(title: "Equipment")
    self.sections << Section.new(title: "Environment")
  end

  def self.find_or_init_past_inspection(args)
    self.find_or_initialize_by(args)
  end
end
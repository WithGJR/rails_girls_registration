class Activity < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  scope :recent, -> { order("id DESC") }
end

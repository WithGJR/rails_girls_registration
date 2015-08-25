class Activity < ActiveRecord::Base
  validates :name, presence: true
  scope :recent, -> { order("id DESC") }
end

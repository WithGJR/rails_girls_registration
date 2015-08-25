class Activity < ActiveRecord::Base
  scope :recent, -> { order("id DESC") }
end

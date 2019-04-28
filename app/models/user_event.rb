class UserEvent < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :title, uniqueness: true
end

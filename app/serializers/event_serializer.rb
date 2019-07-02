class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :regURL, :homeURL, :date
  has_many :user_events
  has_many :users, through: :user_events
end

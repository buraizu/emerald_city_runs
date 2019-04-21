class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :goal, :result
  belongs_to :user
  belongs_to :event
end

class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :date, :featured, :updated_at
end

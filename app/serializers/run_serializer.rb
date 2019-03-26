class RunSerializer < ActiveModel::Serializer
  attributes :id, :course, :distance, :time, :review, :rating
end

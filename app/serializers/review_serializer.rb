class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment
  
  belongs_to :band
  belongs_to :user
end

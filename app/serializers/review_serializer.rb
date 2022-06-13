class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user
  
  belongs_to :band
  belongs_to :user
end

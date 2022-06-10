class ReviewSerializer < ApplicationSerializer
  attributes :id, :rating, :comment
  
  has_one :band
  has_one :user
end

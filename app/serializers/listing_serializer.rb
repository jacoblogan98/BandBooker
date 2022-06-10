class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :date
  
  belongs_to :user
  has_many :gig_applications
end

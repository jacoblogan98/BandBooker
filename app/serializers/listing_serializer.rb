class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :date, :band_id
  
  belongs_to :user
  has_many :gig_applications
end

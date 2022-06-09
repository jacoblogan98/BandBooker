class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :date
  has_one :user
end

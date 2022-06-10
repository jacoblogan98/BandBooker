class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :description, :email, :hourly_rate, :location

  has_many :reviews
end

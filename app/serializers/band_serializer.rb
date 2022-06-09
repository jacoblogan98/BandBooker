class BandSerializer < ApplicationSerializer
  attributes :id, :name, :genre, :description, :email, :hourly_rate, :location
end

class GigApplicationSerializer < ActiveModel::Serializer
  attributes :id, :band

  belongs_to :band
  belongs_to :listing
end

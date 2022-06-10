class GigApplicationSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :band
  belongs_to :listing
end

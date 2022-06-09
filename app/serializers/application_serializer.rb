class ApplicationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :band
  has_one :listing
end

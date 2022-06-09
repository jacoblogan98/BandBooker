class Listing < ApplicationRecord
  belongs_to :user
  has_many :applications
  has_many :bands, through: :applications
end

class Band < ApplicationRecord
    has_many :reviews 
    has_many :applications
end

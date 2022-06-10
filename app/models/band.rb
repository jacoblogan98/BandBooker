class Band < ApplicationRecord
    has_many :reviews 
    has_many :gig_applications
end

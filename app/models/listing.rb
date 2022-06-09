class Listing < ApplicationRecord
  belongs_to :user
  has_many :applications
  has_many :bands, through: :applications

  validate :event_date_cannot_be_in_the_past, on: :create

  def event_date_cannot_be_in_the_past
    if date.present? && self.parse_time(date) < Time.now
        errors.add(:date, "can't be in the past")
    end
  end

  private 

  def parse_time(date)
    split_date_time = date.split('T')

    split_date = split_date_time.first.split('-')
    year = split_date.first
    month = split_date.second
    day = split_date.last

    split_time = split_date_time.last.split(':')
    hour = split_time.first
    minute = split_time.second

    parsed_time = Time.local(year, month, day, hour, minute)

    return parsed_time
  end

end

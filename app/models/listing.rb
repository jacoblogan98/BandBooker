class Listing < ApplicationRecord
  belongs_to :user
  has_many :applications
  has_many :bands, through: :applications

  validate :event_date_cannot_be_in_the_past, on: :create

  def end_time_cannot_be_in_the_past
    if end_time.present? && self.parse_time(end_time) < Time.now
        errors.add(:end_time, "can't be in the past")
    end
  end

  private 

  def parse_time(end_time)
    split_date_time = end_time.split('T')

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

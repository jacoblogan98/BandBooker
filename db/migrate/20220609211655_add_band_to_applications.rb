class AddBandToApplications < ActiveRecord::Migration[7.0]
  def change
    add_reference :applications, :band, null: false, foreign_key: true
  end
end

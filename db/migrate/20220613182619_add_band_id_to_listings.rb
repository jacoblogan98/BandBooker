class AddBandIdToListings < ActiveRecord::Migration[7.0]
  def change
    add_reference :listings, :band, null: true, foreign_key: true
  end
end

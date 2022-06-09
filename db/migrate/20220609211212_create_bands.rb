class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :genre
      t.string :description
      t.string :email
      t.string :hourly_rate
      t.string :location

      t.timestamps
    end
  end
end

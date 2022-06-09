class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.string :location
      t.string :description
      t.string :date

      t.timestamps
    end
  end
end

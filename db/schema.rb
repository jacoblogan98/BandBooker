# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_13_182619) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.string "name"
    t.string "genre"
    t.string "description"
    t.string "email"
    t.string "hourly_rate"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gig_applications", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "band_id", null: false
    t.index ["band_id"], name: "index_gig_applications_on_band_id"
    t.index ["listing_id"], name: "index_gig_applications_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title"
    t.string "location"
    t.string "description"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "band_id"
    t.index ["band_id"], name: "index_listings_on_band_id"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "band_id", null: false
    t.integer "rating"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["band_id"], name: "index_reviews_on_band_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

  add_foreign_key "gig_applications", "bands"
  add_foreign_key "gig_applications", "listings"
  add_foreign_key "listings", "bands"
  add_foreign_key "listings", "users"
  add_foreign_key "reviews", "bands"
  add_foreign_key "reviews", "users"
end

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151231201852) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animals", force: :cascade do |t|
    t.integer  "owner_id",                     null: false
    t.string   "name",                         null: false
    t.string   "gender",             limit: 1, null: false
    t.date     "birthdate",                    null: false
    t.integer  "breed_id",                     null: false
    t.integer  "species_id",                   null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "reason_id"
    t.string   "origin"
    t.string   "ownership_length"
    t.boolean  "bitten",                       null: false
    t.text     "bite_details"
    t.text     "summary"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "animals", ["owner_id"], name: "index_animals_on_owner_id", using: :btree

  create_table "breeds", force: :cascade do |t|
    t.string   "breed",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "species_id", null: false
  end

  create_table "reasons", force: :cascade do |t|
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "species", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                           null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.string   "fname",                           null: false
    t.string   "lname",                           null: false
    t.string   "phone_number",                    null: false
    t.string   "pin",                             null: false
    t.boolean  "email_verified",  default: false, null: false
    t.boolean  "phone_verified",  default: false, null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "is_shelter",      default: false, null: false
    t.string   "email_token"
  end

  add_foreign_key "animals", "breeds"
  add_foreign_key "animals", "species"
  add_foreign_key "animals", "users", column: "owner_id"
end

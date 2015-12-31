class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.integer     :owner_id,    null: false
      t.string      :name,        null: false
      t.string      :gender,      null: false,  limit: 1
      t.date        :birthdate,   null: false
      t.integer     :breed_id,    null: false
      t.integer     :species_id,  null: false
      t.attachment  :image
      t.integer     :reason_id
      t.string      :origin
      t.string      :ownership_length
      t.boolean     :bitten,      null: false
      t.text        :bite_details
      t.text        :summary

      t.timestamps null: false
    end
    add_index :animals, :owner_id
    add_foreign_key :animals, :users, column: :owner_id
    add_foreign_key :animals, :breeds, column: :breed_id
    add_foreign_key :animals, :species, column: :species_id
  end
end

class CreateBreeds < ActiveRecord::Migration
  def change
    create_table :breeds do |t|
      t.string :breed, null: false, unique: true

      t.timestamps null: false
    end
  end
end

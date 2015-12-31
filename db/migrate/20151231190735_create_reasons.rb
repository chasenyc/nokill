class CreateReasons < ActiveRecord::Migration
  def change
    create_table :reasons do |t|
      t.string :description, null: false, unique: true

      t.timestamps null: false
    end
  end
end

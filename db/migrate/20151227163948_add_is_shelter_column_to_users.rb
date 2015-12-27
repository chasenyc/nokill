class AddIsShelterColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :is_shelter, :boolean, null: false, default: false
  end
end

class AddSpeciesIdToBreedTable < ActiveRecord::Migration
  def change
    add_column :breeds, :species_id, :integer, null: false
  end
end

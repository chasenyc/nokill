class Breed < ActiveRecord::Base

  belongs_to :species
  has_many :animals
end

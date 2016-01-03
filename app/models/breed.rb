class Breed < ActiveRecord::Base

  validates :breed, uniqueness: true

  belongs_to :species
  has_many :animals

end

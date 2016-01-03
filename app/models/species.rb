class Species < ActiveRecord::Base

  validates :name, uniqueness: true

  has_many :breeds
  has_many :animals

end

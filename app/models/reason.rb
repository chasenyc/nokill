class Reason < ActiveRecord::Base

  validates :description, uniqueness: true

  has_many :animals

end

class Api::BreedsController < ApplicationController

  def index
    byebug
    @breeds = Breed.all
  end

end

class Api::SpeciesController < ApplicationController

  def index
    @species = Species.all
  end

end

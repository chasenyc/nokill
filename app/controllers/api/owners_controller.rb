class Api::OwnersController < ApplicationController
  before_action :ensure_current_user_is_authorized, only: [:update]

    def create
      @owner = Owner.new(owner_params)
      @owner.admin = false
      if @owner.save
        session[:session_token] = @owner.session_token
        render "show"
      else
        render json: @owner.errors.full_messages.to_json, status: 401
      end
    end

    def update
      @owner = Owner.find(params[:id])
      @owner.update(owner_params)
      if @owner.save
        render "show"
      else
        render json: @owner.errors.full_messages.to_json, status: 401
      end
    end

    private
    def owner_params
      params.require(:owner).permit(
        :email, :password, :fname, :lname, :phone_number
      )
    end

    def ensure_current_owner_is_authorized
      return if (params[:id].to_i == current_owner.id)
      render json: "Something went wrong, cannot edit another owner's information.", status: :forbidden
    end
end

class Api::UsersController < ApplicationController
  before_action :ensure_current_user_is_authorized, only: [:update]

    def create
      @user = User.new(user_params)
      if @user.save
        session[:session_token] = @user.session_token
        UserMailer.email_verification(@user).deliver_later
        render "show"
      else
        render json: @user.errors.full_messages.to_json, status: 401
      end
    end

    def update
      @user = User.find(params[:id])
      @user.update(user_params)
      if @user.save
        render "show"
      else
        render json: @user.errors.full_messages.to_json, status: 401
      end
    end

    def send_email_verification
      @user = current_user
      if @user
        UserMailer.email_verification(@user).deliver_later
        render json: {'response' => 'success'}, status: 200
      else
        render json: @user.errors.full_messages.to_json, status: 401
      end
    end

    private
    def user_params
      params.require(:user).permit(
        :email, :password, :fname, :lname, :phone_number
      )
    end

    def ensure_current_user_is_authorized
      return if (params[:id].to_i == current_user.id)
      render json: {'response' => "Something went wrong, cannot edit another user's information."}, status: :forbidden
    end
end

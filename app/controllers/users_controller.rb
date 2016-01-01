class UsersController < ApplicationController

  def confirm_email
    # Needs to notify success/failure.
    @user = User.find_by_email_token(params[:id])
    if @user
      @user.email_verified = true
      @user.save
      redirect_to root_url
    else
      redirect_to root_url

    end
  end

end

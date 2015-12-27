class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_owner, :owner_logged_in?

  def current_owner
    Owner.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_owner
  end

  def sign_in!(owner)
    @current_owner = owner
    @current_owner.reset_session_token!
    self.session[:session_token] = @current_owner.session_token
  end

  def sign_out!
    current_owner.try(:reset_session_token!)
    self.session[:session_token] = nil
  end
end

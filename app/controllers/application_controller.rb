class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  #protect_from_forgery with: :exception
  #
  #

  before_action :authenticate_admin!, only: [:admin]

  def index
  end

  def admin
  end

  private
  def authenticate_admin!
    unless user_signed_in? && current_user.is_admin? 
      authenticate_user! 
    end   
  end
end

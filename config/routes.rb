Rails.application.routes.draw do
  namespace :backend do
    resources :activities
  end
  devise_for :users

  root 'application#index'
  get Rails.application.secrets["admin_path"] => 'application#admin'

end

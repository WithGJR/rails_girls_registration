Rails.application.routes.draw do
  namespace :backend do
    resources :activities
  end
  devise_for :users
end

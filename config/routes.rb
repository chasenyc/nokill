Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    get 'send_email_verification', to: 'users#send_email_verification'
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :species, only: [:index]
    resources :breeds, only: [:index]
  end

  resources :users, only: [] do
    member do
      get :confirm_email
    end
  end
end

Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :owners, only: [:create, :update, :show]
  end
end

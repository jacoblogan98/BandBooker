Rails.application.routes.draw do
  resources :reviews
  resources :bands, only: [:index, :show]
  resources :applications, only: [:index, :show]
  resources :listings
  resources :users
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/authorized_user", to: "users#show"

  get "/signup", to: "users#create"

end

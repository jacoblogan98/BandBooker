Rails.application.routes.draw do
  resources :reviews
  resources :bands, only: [:index, :show]
  resources :gig_applications, only: [:index, :show]
  resources :listings
  resources :users
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/authorized_user", to: "users#show"
  post "/signup", to: "users#create"

end

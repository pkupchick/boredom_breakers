Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users

    resources :events
    
    match 'verify_user', to: 'users#verify', via: [:get]
    resource :session, only: [:create, :destroy]
  end
end

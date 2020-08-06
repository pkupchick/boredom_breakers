Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :registrations
    resources :events
    # match 'user_tickets', to: 'registrations#tickets', via: [:get]
    match 'verify_user', to: 'users#verify', via: [:get]
    resource :session, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :destroy, :show, :index]

    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

end

# consider removing photos: :show
  # will be using front end routes to render show

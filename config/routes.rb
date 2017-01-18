Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :index]
    resources :likes, only: [:create, :destroy, :index]

    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

end

#check all routes are being used


# changed to :users, here, session_api_util, user_api_util,
  # users controller

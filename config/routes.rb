Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:create, :update, :destroy, :show, :index]
    resources :comments, only: [:create, :index]


    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
  end

end

#check all routes are being used

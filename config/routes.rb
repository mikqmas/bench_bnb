Rails.application.routes.draw do
  root to: 'staticpages#root'
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create]
  end
end

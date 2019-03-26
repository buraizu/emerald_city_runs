Rails.application.routes.draw do
  resources :runs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :events

  end
end

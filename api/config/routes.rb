Rails.application.routes.draw do
  namespace :api do
    resources :questions, only: [:index]
    resources :domains, only: [:index]
    resources :domain_mappings, only: [:index]
    resources :answers, only: [:index]

    post "/assessments", to: "assessments#assess"
  end
end

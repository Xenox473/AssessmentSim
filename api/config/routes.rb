Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index]
      resources :domains, only: [:index]
      resources :mappings, only: [:index]
      resources :answers, only: [:index]

      get "/assessment/:answers", to: "assessment#show"
    end
  end
end

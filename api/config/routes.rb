Rails.application.routes.draw do
  namespace :api do
    post "/assessments/results", to: "assessments#results"
    get "/assessments/data", to: "assessments#data"
  end
end

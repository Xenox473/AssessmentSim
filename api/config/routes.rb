Rails.application.routes.draw do
  namespace :api do
    post "/assessments/results", to: "assessments#results"
  end
end

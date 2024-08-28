class Api::AssessmentsController < ApplicationController
  def results
    answers = params[:answers]
    results = AssessmentsService.assess(answers)
    render json: {results: results}
  end
end

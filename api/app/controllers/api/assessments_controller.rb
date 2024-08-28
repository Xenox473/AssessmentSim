class Api::AssessmentsController < ApplicationController
  def results
    answers = params[:answers]
    results = AssessmentsService.assess(answers)
    render json: {results: results}
  end

  def data
    answers = Answer.all.sort_by(&:value).pluck(:title, :value).map { |title, value| {title: title, value: value} }
    questions = Question.all.pluck(:question_id, :title).map { |question_id, title| {question_id: question_id, title: title} }
    details = {
      id: "abcd-123",
      name: "BPDS",
      disorder: "Cross-Cutting",
      content: {
        sections: [
          {
            type: "standard",
            title: "During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?",
            answers: answers,
            questions: questions
          }
        ],
        display_name: "BDS"
      },
      full_name: "Blueprint Diagnostic Screener"
    }

    render json: details
  end
end

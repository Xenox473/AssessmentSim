class Api::AssessmentsController < ApplicationController
  def assess
    answers = params[:answers]

    domain_scores = Domain.all.map { |domain| [domain, 0] }.to_h

    answers.each do |answer|
      question = Question.find_by(question_id: answer[:question_id])
      domain = DomainMapping.find_by(question: question).domain
      domain_scores[domain] += answer[:value]
    end

    assessment = domain_scores.map { |domain, score| domain.assessment if score >= domain.minimum_score }.compact

    render json: { results: assessment}
  end

  def details
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

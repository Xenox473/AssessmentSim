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
end

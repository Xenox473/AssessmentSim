class Api::DomainMappingsController < ApplicationController
  def index
    @domain_mappings = DomainMapping.all
    render json: @domain_mappings.map { |domain_mapping| {domain: domain_mapping.domain.name, question: domain_mapping.question.question_id} }
  end
end

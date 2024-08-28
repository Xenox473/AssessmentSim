class DomainMapping < ApplicationRecord
  belongs_to :domain
  belongs_to :question
end

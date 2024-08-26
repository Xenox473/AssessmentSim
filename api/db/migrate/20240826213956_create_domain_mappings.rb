class CreateDomainMappings < ActiveRecord::Migration[7.0]
  def change
    create_table :domain_mappings do |t|
      t.integer :domain_id
      t.integer :question_id
      t.timestamps
    end

    add_foreign_key :domain_mappings, :domains
    add_foreign_key :domain_mappings, :questions
  end
end

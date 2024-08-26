class CreateDomains < ActiveRecord::Migration[7.0]
  def change
    create_table :domains do |t|
      t.string :name
      t.integer :minimum_score
      t.string :assessment
      t.timestamps
    end
  end
end

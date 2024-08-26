class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers, id: false, primary_key: [:value] do |t|
      t.integer :value
      t.string :title
      t.timestamps
    end
  end
end

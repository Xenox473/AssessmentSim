class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question_id, null: false, index: {unique: true, name: "unique_question_id"}
      t.string :title
      t.timestamps
    end
  end
end

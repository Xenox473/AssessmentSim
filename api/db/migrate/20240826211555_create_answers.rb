class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.integer :value, null: false, index: {unique: true, name: "unique_value"}
      t.string :title
      t.timestamps
    end
  end
end

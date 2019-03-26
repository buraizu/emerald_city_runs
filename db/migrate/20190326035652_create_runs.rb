class CreateRuns < ActiveRecord::Migration[5.2]
  def change
    create_table :runs do |t|
      t.string :course
      t.integer :distance
      t.integer :time
      t.text :review
      t.integer :rating

      t.timestamps
    end
  end
end

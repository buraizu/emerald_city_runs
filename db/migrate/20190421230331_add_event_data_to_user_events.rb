class AddEventDataToUserEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :user_events, :title, :string
    add_column :user_events, :url, :string
    add_column :user_events, :date, :date
  end
end

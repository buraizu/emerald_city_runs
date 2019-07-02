class AlterUrlPropsOnEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :regURL, :string
    add_column :events, :homeURL, :string

    remove_column :events, :url, :string
  end
end

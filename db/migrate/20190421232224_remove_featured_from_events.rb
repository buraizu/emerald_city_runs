class RemoveFeaturedFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :featured, :boolean
  end
end

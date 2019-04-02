class AddFeaturedToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :featured, :boolean, default: false
  end
end

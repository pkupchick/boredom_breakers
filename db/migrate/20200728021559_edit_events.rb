class EditEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :time
    remove_column :events, :date
  end
end

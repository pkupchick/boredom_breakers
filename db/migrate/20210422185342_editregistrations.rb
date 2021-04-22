class Editregistrations < ActiveRecord::Migration[5.2]
  def change
    add_column :registrations, :event_title, :string
  end
end

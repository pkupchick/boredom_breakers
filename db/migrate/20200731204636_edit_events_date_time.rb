class EditEventsDateTime < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :event_start, :date, null: false
    add_column :events, :event_end, :date, null: false 
    add_column :events, :event_start_time, :string, null: false 
    add_column :events, :event_end_time, :string, null: false
  end
end

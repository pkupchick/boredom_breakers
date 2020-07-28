class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.string :category, null: false
      t.integer :max_attendees, null: false
      t.timestamps
    end
    add_index :events, [:host_id, :location, :category]
  end
end

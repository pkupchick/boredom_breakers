class Registration < ApplicationRecord
    validates :user_id, :event_id, presence: true

    belongs_to :user 

    belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event
end

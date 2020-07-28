class Event < ApplicationRecord
    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end

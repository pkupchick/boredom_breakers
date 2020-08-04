# == Schema Information
#
# Table name: registrations
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  attended   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Registration < ApplicationRecord
    validates :user_id, :event_id, presence: true

    belongs_to :user 

    belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event
end

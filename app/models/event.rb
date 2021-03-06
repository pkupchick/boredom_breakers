# == Schema Information
#
# Table name: events
#
#  id               :bigint           not null, primary key
#  host_id          :integer          not null
#  title            :string           not null
#  description      :string           not null
#  price            :integer          not null
#  location         :string           not null
#  category         :string           not null
#  max_attendees    :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  event_start      :date             not null
#  event_end        :date             not null
#  event_start_time :string           not null
#  event_end_time   :string           not null
#
class Event < ApplicationRecord
    
    validates :title, presence: true, uniqueness: true
    validates :host_id, :description, :price, :location, :category, :event_start, :event_end, :event_start_time, :event_end_time, :max_attendees, presence: true

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User


    has_many :registrations,
        foreign_key: :event_id,
        class_name: :Registration
    
    has_one_attached :photo

end

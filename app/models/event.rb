# == Schema Information
#
# Table name: events
#
#  id            :bigint           not null, primary key
#  host_id       :integer          not null
#  title         :string           not null
#  description   :string           not null
#  price         :integer          not null
#  location      :string           not null
#  category      :string           not null
#  max_attendees :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Event < ApplicationRecord
    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end

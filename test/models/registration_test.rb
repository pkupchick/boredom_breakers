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
require 'test_helper'

class RegistrationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

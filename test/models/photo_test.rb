# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  image_url  :string           not null
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liked      :boolean          default("false")
#  likes      :integer          default("0")
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

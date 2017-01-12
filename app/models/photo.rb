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
#

class Photo < ApplicationRecord
  belongs_to :user

  validates :user_id, :image_url, presence: true
end

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

class Photo < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :user_id, :image_url, presence: true
  after_initialize :init

  def init
    self.liked ||= false
  end
end

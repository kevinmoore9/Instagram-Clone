# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  belongs_to :photo
  belongs_to :user
  after_initialize :init
  validates :photo_id, :user_id, :body, presence: true

  def init
    self.username ||= User.find(user_id).username
  end
end

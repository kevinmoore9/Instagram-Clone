# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  profile_img_url :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  followed        :boolean          default("false")
#  followers       :integer          default("0")
#

class User < ApplicationRecord

  attr_reader :password


  # associations
  has_many :photos

  ## model level validations
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  after_initialize :ensure_session_token, :init
  before_validation :ensure_session_token_uniqueness

  def init
    self.profile_img_url ||= "http://www.sunshineglobalhospitals.com/xadmin/myaccount/upload/default/profiledefault.png"
    self.followers ||= 0
    self.followed ||= false
  end
  ## auth form functions
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end

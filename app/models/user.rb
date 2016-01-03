class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token,
            :fname, :lname, :pin, :email_token, presence: true

  validates :email, :phone_number, :email_token, uniqueness: true

  after_initialize :ensure_session_token, :generate_pin,
                   :ensure_email_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password
    @password
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def generate_pin
    self.pin ||= rand(0000..9999).to_s.rjust(4, "0")
  end

  def ensure_email_token
    self.email_token ||= SecureRandom::urlsafe_base64
  end

end

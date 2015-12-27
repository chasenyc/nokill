class Owner < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token,
            :birthdate, :fname, :lname, :pin, :email_verified,
            :phone_verified, presence: true

  after_initialize :ensure_session_token, :generate_pin

  def self.find_by_credentials(email, password)
    owner = Owner.find_by_email(email)
    return nil if owner.nil?
    owner.is_password?(password) ? owner : nil
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


end

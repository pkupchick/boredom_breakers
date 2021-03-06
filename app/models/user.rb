# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  session_token   :string
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token,  presence: true, uniqueness: true
    validates :password_digest, :name, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    
    attr_reader :password

    after_initialize :ensure_session_token

    has_many :events,
    foreign_key: :host_id,
    class_name: :Event

    has_many :registrations

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        bcp = BCrypt::Password.new(self.password_digest)
        bcp.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end
    
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def all_events
        # hosted events + events that you purchased.
        self.events + self.registrations.map {|ticket| ticket.event }
    end
end

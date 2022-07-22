# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord

    attr_reader :password 

    validates :username, :email, presence: true, uniqueness: true 
    validates :password_digest, :session_token, presence: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 

    after_initialize :ensure_session_token 

    has_many :chirps, 
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :Chirping 

    has_many :likes, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Like 
    
    has_many :liked_chirps, 
        through: :likes, 
        source: :chirp 

    has_many :fanships,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :Follow 
    
    has_many :followships,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow 
    
    has_many :followers,
        through: :fanships,
        source: :follower 
    
    has_many :followees,
        through: :followships,
        source: :followee 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end

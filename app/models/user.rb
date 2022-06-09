class User < ApplicationRecord
    has_many :listings
    has_many :reviews

    has_secure_password
    
    validates :username, presence: true
    validates :username, uniqueness: true

    validates :password, presence: true, on: :create
    validates :password, length: { minimum: 2 }, on: :create

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
end

# == Schema Information
#
# Table name: chirpings
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#
# Indexes
#
#  index_chirpings_on_author_id  (author_id)
#
class Chirping < ApplicationRecord
    validates :body, presence: true 
    validate :chirp_too_long 

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 
    
    has_many :likes, 
        primary_key: :id, 
        foreign_key: :chirp_id,
        class_name: :Like 
    
    has_many :likers, 
        through: :likes, 
        source: :user 
    
    def chirp_too_long 
        if body.length > 140 
            errors[:body] << "too long"
        end
    end

    def likes_total
        likes.count 
    end

end

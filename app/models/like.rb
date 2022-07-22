# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  chirp_id   :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_likes_on_user_id_and_chirp_id  (user_id,chirp_id) UNIQUE
#
class Like < ApplicationRecord
    validates :user_id, :chirp_id, presence: true 

    belongs_to :chirp,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Chirping
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end

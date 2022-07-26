# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#  follower_id :integer          not null
#
# Indexes
#
#  index_follows_on_followee_id  (followee_id)
#  index_follows_on_follower_id  (follower_id)
#
class Follow < ApplicationRecord

    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User 
    
    belongs_to :followee,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :User 
end

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
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

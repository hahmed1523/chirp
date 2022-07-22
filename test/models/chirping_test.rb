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
require 'test_helper'

class ChirpingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

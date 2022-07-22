json.partial! "api/users/user", user: @user

# @user.chirps.each do |chirp| 
#     json.chirps do 
#         json.set! chirp.id do 
#             json.partial! 'api/chirpings/chirp', chirp: chirp 
#         end
#     end
# end
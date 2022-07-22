json.extract! user, :id, :username, :email, :created_at
json.followers user.followers.length
json.followees user.followees.length
json.chirp_total user.chirps.length  
if current_user 
    json.followed_by_current_user !!user.followers.find_by(id:current_user.id)
end 

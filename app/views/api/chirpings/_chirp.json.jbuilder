json.extract! chirp, :id, :body, :author_id
json.likes chirp.likes.count
json.username chirp.author.username 
json.email chirp.author.email 
# json.partial! 'api/users/user', user: chirp.author 
if current_user 
    json.liked_by_current_user !!chirp.likes.find_by(user_id: current_user.id)
end

if current_user 
    json.followed_by_current_user !!chirp.author.followers.find_by(id:current_user.id)
end 

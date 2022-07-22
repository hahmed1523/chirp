class Api::FollowsController < ApplicationController
    def create 
        @follow = Follow.new 
        @follow.followee_id = params[:id]
        @follow.follower_id = current_user.id 
        if @follow.save
            @user = User.find(params[:id]) 
            render 'api/users/show' 
        else
            render json: @follow.errors.full_messages, status: 401
        end
    end

    def destroy 
        @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id])
        @user = User.find(params[:id]) 
        @follow.destroy 
        
        render 'api/users/show'
    end
end

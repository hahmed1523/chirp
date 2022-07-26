class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id 
        @like.chirp_id = params[:id] 
        if @like.save
            @chirp = @like.chirp 
            render 'api/chirpings/show' 
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy 
        @like = Like.find_by(user_id: current_user.id, chirp_id: params[:id])
        @like.destroy 
        @chirp = @like.chirp 
        render 'api/chirpings/show'
    end

    private

    # def like_params
    #     params.require(:like).permit(:user_id, :chirp_id)
    # end
end

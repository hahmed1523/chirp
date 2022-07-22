class Api::ChirpingsController < ApplicationController
    def create 
        @chirp = Chirping.new(chirp_params)
        if @chirp.save 
            render :show 
        else
            render json: @chirp.errors.full_messages, status: 401 
        end
    end

    def update 
        @chirp = selected_chirp 
        if @chirp && @chirp.update_attributes(chirp_params)
            render :show 
        # elsif !@chrip 
        #     render json: ['Could not locate chirp'], status: 400 
        else
            render json: @chirp.errors.full_messages, status: 401 
        end
    end

    def show 
        @chirp = Chirping.find(params[:id])
    end

    def index
        @chirps = Chirping.all.includes(:author, :likes) 
    end

    def destroy 
        @chirp = selected_chirp
        if @chirp
            @chirp.destroy
            render :show 
        else
            render ['Could not find chirp']
        end
    end

    private 

    def selected_chirp 
        Chirping.find_by(id: params[:id])
    end

    def chirp_params
        params.require(:chirp).permit(:body, :author_id)
    end
end

class BandsController < ApplicationController

    def index
        render json: Band.all, status: :ok
    end

    def show
        band = find_band
        render json: band, status: :ok
    end

    private 
    
    def find_band
        Band.find(params[:id])
    end
end

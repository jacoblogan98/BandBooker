class BandsController < ApplicationController

    def index
        bands = Band.all
        render json: bands
    end

    def show
        band = find_band
        render json: band
    end

    private 
    
    def find_band
        Band.find(id: params[:id])
    end
end

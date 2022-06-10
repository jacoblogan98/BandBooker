class GigApplicationsController < ApplicationController
    
    # before_action :authorize_user

    def index
        applications = GigApplication.all
        render json: applications
    end

    def show
        application = find_application
        render json: application
    end

    private 

    def find_application
        GigApplication.find(params[:id])
    end

    def application_params
        params.permit(:id, :band_id, :listing_id)
    end

end

class UsersController < ApplicationController
    
    # Authorization
    before_action :authorize_user, except: [:index, :create]

    def index
        render json: User.all
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    private 

    def user_params 
        params.permit(:name, :email, :username, :password, :password_confirmation)
    end
end

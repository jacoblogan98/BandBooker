class ReviewsController < ApplicationController

    # Authorization
    before_action :authorize_user, only: [:create, :update, :destroy]

    def index
        render json: Review.all, status: :ok, adapter: nil
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private 
    
    def find_review
        Review.find(params[:id])
    end
    
    def review_params
        params.permit(:id, :band_id, :rating, :user_id, :comment)
    end
end

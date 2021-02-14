class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    respond_to do |format|
      # depending on the 'Accept' of the request
      format.html
      format.json { render json: { restaurants: @restaurants } }
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @review = Review.new  # <-- You need this now.
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])
    @restaurant.destroy
    redirect_to restaurants_path
  end
end

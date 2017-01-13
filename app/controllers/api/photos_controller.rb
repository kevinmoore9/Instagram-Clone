class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render :show
  end

  def index
    @photos = Photo.all.includes(:user)
  end

  def show
    @photo = Photo.find(params[:id])
  end


  private

  def photo_params
    params.require(:photo)
      .permit(:user_id, :image_url, :caption)
  end
end
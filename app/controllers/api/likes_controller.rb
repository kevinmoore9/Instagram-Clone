class Api::LikesController < ApplicationController

  def create
    like = Like.new(like_params)
    like.save
    @photo = Photo.find(like.photo_id)
    render 'api/photos/show'
  end

  def destroy
    like = Like.find(params[:id])
    @photo = Photo.find(like.photo_id)
    like.destroy
    render 'api/photos/show'
  end

  def index
    @likes = Like.all.includes(:user).where("user_id = ?", params[:userId])
  end

  def like_params
    params.require(:like).permit(:user_id, :photo_id, :id)
  end

end

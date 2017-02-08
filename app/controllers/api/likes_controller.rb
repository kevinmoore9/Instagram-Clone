class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.save
    render :show
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :show
  end

  def index
    @likes = Like.all.includes(:user).where("user_id = ?", params[:userId])
  end

  def like_params
    params.require(:like).permit(:user_id, :photo_id, :id)
  end

end

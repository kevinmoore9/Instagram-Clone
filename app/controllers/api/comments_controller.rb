class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      @photo = Photo.find(comment.photo_id)
      render 'api/photos/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all.includes(:user)
  end

  private

  def comment_params
    params.require(:comment)
      .permit(:user_id, :photo_id, :body)
  end

end

class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    debugger
    @comments = Comment.all.includes(:user)

  end

  private

  def comment_params
    params.require(:comment)
      .permit(:user_id, :photo_id, :body)
  end

end

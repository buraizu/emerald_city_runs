class UsersController < ApplicationController



  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def find
    @user = User.find_by(email: params[:user][:email])
    if @user
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end

end

class UserEventsController < ApplicationController
  before_action :authenticate_user, only: [:create, :index]

  def index
    @user_events = current_user.user_events
    render json: @user_events, status: 200
  end

  def create
    @user_event = UserEvent.new(user_event_params)
    @user_event.user_id = current_user.id
    @user_event.event_id = params[:id]

    if @user_event && @user_event.save
      render json: @user_event
    else
      render json: { message: @user_event.errors }, status: 400
    end
  end

  private

    def user_event_params
      params.require(:user_event).permit(:goal, :result, :title, :url, :date)
    end

end

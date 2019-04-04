class EventsController < ApplicationController

  def index
    current_date = Time.now
    events = Event.all.select do |e|   # Remove past Events
      e.date > current_date
    end

    render json: events, status: 200
  end

  def update
    @event = Event.find_by(id: params[:id])
    @event.update(event_params)
    render json: @event
  end

  private

    def event_params
      params.require(:event).permit(:title, :url, :date, :featured)
    end

end

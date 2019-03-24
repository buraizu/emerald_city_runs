class EventsController < ApplicationController

  def index
    current_date = Time.now.strftime("%Y-%m-%d")
    # filteredEvents = Event.all.map {|e| e.date >= current_date}
    events = Event.all

    render json: events, status: 200
  end

end

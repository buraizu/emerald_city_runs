class EventsController < ApplicationController

  def index
    current_date = Time.now
    events = Event.all.select do |e|   # Remove past Events
      e.date > current_date
    end

    render json: events, status: 200
  end

end

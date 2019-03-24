class EventsController < ApplicationController

  def index
    api_key = ENV['ACTIVE_API_KEY']
    @events = RestClient::Request.execute(
      method: :get,
      url: "http://api.amp.active.com/v2/search?query=running&category=races&city=Seattle&radius=50&start_date=2019-03-22..&api_key=#{api_key}"
    )
    render json: @events, status: 200
  end

end

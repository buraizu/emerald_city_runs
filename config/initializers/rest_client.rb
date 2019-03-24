require 'rest-client'
require 'rails/configuration'

  api_key = ENV['ACTIVE_API_KEY']
  current_date = Time.now.strftime("%Y-%m-%d")
  active_url = "http://api.amp.active.com/v2/search?query=running&category=races&city=Seattle&radius=50&start_date=#{current_date}..&api_key="

  data = JSON.parse( RestClient.get("#{active_url}#{api_key}"))

  data["results"].each do |result|

    existing_event = Event.find_by(title: result["assetName"]) # Check if event is already in db

    if !existing_event
      newEvent = Event.new
      newEvent.title = result["assetName"]
      newEvent.url = result["homePageUrlAdr"]
      newEvent.date = result["activityStartDate"]
      if newEvent.save
        puts "saved event from Active api"
      else
        puts "did not save event"
      end
    end
  end

# config/initializers/datadog.rb
require 'ddtrace'

Datadog.configure do |c|
    c.env = 'dev'
    c.service = 'emerald_city_runs'
    c.sampling.default_rate = 1.0
  
    c.use :rails
  end
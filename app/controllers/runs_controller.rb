class RunsController < ApplicationController

  def create
    @run = Run.new(run_params)

    if @run.save
      render component: 'Home'
    else
      render text: "Something went wrong"
    end

  end

  private

  def run_params
    params.require(:run).permit(:course, :distance, :time, :review, :rating)
  end

end

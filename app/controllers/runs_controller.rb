class RunsController < ApplicationController

  def index
    runs = Run.all
    render json: runs, status: 200
  end

  def create

    @run = Run.new(run_params)

    if @run.save
      render json: @run
    end

  end

  private

  def run_params
    params.require(:run).permit(:course, :distance, :time, :review, :rating, :id)
  end

end

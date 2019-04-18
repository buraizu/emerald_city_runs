class RunsController < ApplicationController
  before_action :authenticate_user

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

  def update
    @run = Run.find_by(id: params[:id])
    @run.update(run_params)
    render json: @run
  end

  def destroy
    @run = Run.find_by(id: params[:id])
    @run.delete
  end

  private

  def run_params
    params.require(:run).permit(:course, :distance, :time, :review, :rating, :user_id)
  end

end

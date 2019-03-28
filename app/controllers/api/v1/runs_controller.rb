class Api::V1::RunsController < Api::V1::BaseController

  def index
    respond_with Run.all
  end

  def create
    binding.pry
    # @run = Run.new(run_params)
    #
    # if @run.save
    #   render component: 'Home'
    # else
    #   render text: "Something went wrong"
    # end
    respond_with :api, :v1, Run.create(run_params)

  end

  private

  def run_params
    params.require(:run).permit(:course, :distance, :time, :review, :rating)
  end

end

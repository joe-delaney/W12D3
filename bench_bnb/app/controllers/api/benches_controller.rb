class Api::BenchesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        @benches = Bench.in_bounds(params[:bounds], params[:maxSeating], params[:minSeating]) 
        render :index
    end

    def create 
        @bench = Bench.new(bench_params)

        if @bench.save  
            render :show
        else 
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private
    def bench_params 
        params.require(:bench).permit(:description, :seating, :lat, :lng, :maxSeating, :minSeating)
    end
end

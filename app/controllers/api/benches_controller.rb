class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:northWest], params[:southEast])
  end

  def create
    @bench = Bench.create!(description, lat, lng)
  end
end

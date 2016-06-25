class Bench < ActiveRecord::Base
  def self.in_bounds(northEast, southWest)
    self.where("lat < ?", northEast["lat"])
        .where("lat > ?", southWest["lat"])
        .where("lng > ?", southWest["lng"])
        .where("lng < ?", northEast["lng"])
  end
end

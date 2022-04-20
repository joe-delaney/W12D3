class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence:true

    def self.in_bounds(bounds)
        # google map bounds will be in the following format:
        # {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        # }
        #... query logic goes here

        east = bounds["northEast"]["lat"].to_f
        west = bounds["southWest"]["lat"].to_f
        north = bounds["northEast"]["lng"].to_f
        south = bounds["southWest"]["lng"].to_f

        benches = Bench.where(lat: east..west, lng: north..south)
        benches
    end
end

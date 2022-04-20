@benches.each do |bench|
    json.set! bench.id do
        json.extract! bench, :id, :description, :seating, :lat, :lng
    end
end
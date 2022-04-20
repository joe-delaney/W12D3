# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

puts "Creating Users..."

u1 = User.create!(username: "joe123", password:"123456")
u2 = User.create!(username: "joe456", password:"123456")
u3 = User.create!(username: "joe789", password:"123456")

puts "Creating benches..."

b1 = Bench.create!(description: "Bench1", lat: 40.7831, lng: -73.9712)
b1 = Bench.create!(description: "Bench2", lat: 40.7799, lng: -73.9705)
b1 = Bench.create!(description: "Bench3", lat: 40.7859, lng: -73.9730)

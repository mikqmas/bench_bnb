# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

coords = Bench.create([
  { description: 'SF Library', lat: 37.777904, lng: -122.415765 },
  { description: 'AT&T Park', lat: 37.778936, lng: -122.389733 },
  { description: 'Shift HQ', lat: 37.762165, lng:  -122.436578 },
  { description: 'App Academy', lat: 37.791259, lng: -122.393651 },
  { description: 'Fort Mason', lat: 37.805551, lng: -122.431544 }
])

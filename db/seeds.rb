# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

peter = User.create!(email: "pkupchick@gmail.com", name: "Peter KupchicK", password: "hunter")
aschel = User.create!(email: "agregory@gmail.com", name: "Aschel Gregory", password: "hunter")
brenda = User.create!(email: "bkupchick@gmail.com", name: "Brenda Kupchick", password: "hunter")
dan = User.create!(email: "daniel@gmail.com", name: "Daniel Disimone", password: "hunter")

yoga = Event.create!(host_id: aschel.id, title: "Yoga Classes", description: "Come learn the healing properties of Yoga with top instructor Aschel Gregory", event_start: "08-02-2020", event_end: "09-02-2020", event_start_time: "8:00PM", event_end_time: "11:00PM", price: 50, location: "Los Angeles, CA", category: "Yoga", max_attendees: 30)
blm = Event.create!(host_id: brenda.id, title: "Black Lives Matter - CT", description: "Fairfield CT's very own first selectwoman is putting on an event to show her support for the BLM movement", event_start: "10-1-2020", event_end: "10-02-2020", event_start_time: "6:00PM", event_end_time: "12:00PM", price: 0, location: "Fairfield, CT", category: "politics", max_attendees: 999999)
concert = Event.create!(host_id: peter.id, title: "Chance the Rapper - Mystery Tour - 2020", description: "Come see chance the rapper at the hammerstein ballroom in NYC this thursday!", event_start: "09-12-2020", event_end: "09-12-2020", event_start_time: "10:00PM", event_end_time: "1:00AM", price: 50, location: "New York, NY", category: "Music", max_attendees: 820)
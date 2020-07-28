# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

peter = User.create!(email: "Pkupchick@gmail.com", name: "Peter KupchicK", password: "hunter")

bbq = Event.create!(host_id: peter.id, title: "How to BBQ", description: "Bring your appetite and meats and learn how to cookd like the pros", price: 0, location: "Portland, MA", category: "Food", max_attendees: 10)
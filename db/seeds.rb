require 'open-uri'
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
jim = User.create!(email: "jim@gmail.com", name: "Jim Gagger", password: "hunter")

# yoga = Event.create!(host_id: aschel.id, title: "Yoga Classes", description: "Come learn the healing properties of Yoga with top instructor Aschel Gregory", event_start: "08-02-2020", event_end: "09-02-2020", event_start_time: "8:00PM", event_end_time: "11:00PM", price: 50, location: "Los Angeles, CA", category: "Yoga", max_attendees: 30)
# blm = Event.create!(host_id: brenda.id, title: "Black Lives Matter - CT", description: "Fairfield CT's very own first selectwoman is putting on an event to show her support for the BLM movement", event_start: "10-1-2020", event_end: "10-02-2020", event_start_time: "6:00PM", event_end_time: "12:00PM", price: 0, location: "Fairfield, CT", category: "politics", max_attendees: 999999)
# concert = Event.create!(host_id: peter.id, title: "Chance the Rapper - Mystery Tour - 2020", description: "Come see chance the rapper at the hammerstein ballroom in NYC this thursday!", event_start: "09-12-2020", event_end: "09-12-2020", event_start_time: "10:00PM", event_end_time: "1:00AM", price: 50, location: "New York, NY", category: "Music", max_attendees: 820)

e1 =    Event.create!({
    host_id: peter.id,
    title: "Advanced Photoshop Techniques: with Mufasa",
    description: "Long before he was the King of the Jungle Mufasa was an avid wildlife photographer.  
    Since the faking of his death he's head ample time to pick up a camera and capture some of the 
    Serengeti's most most breath taking creatures.",
    event_start: "2020-10-10",
    event_end: "2020-10-10",
    event_start_time: "11:00",
    event_end_time: "13:00",
    price: 150,
    location: "Musoma, Africa",
    category: "Performing & Visual Arts",
    max_attendees: 55,
  })
  e1.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/photo-editing-seminar.png"), filename: "photo-editing-seminar.jpg")

 e2 =  Event.create!({
    host_id: dan.id,
    title: "Intergalactic Space Picnic with Rick and Morty",
    description: "Register to attend a picnic for the ages with Rick and Morty, portal guns included!
    This Friday, well not this worlds' Friday but that worlds Friday come join us for a swell time, you can rest assured
    Ricks bringing the pickles.  All you need to bring are some of those sweet wafers.",
    event_start: "2021-06-06",
    event_end: "2021-06-06",
    event_start_time: "18:00",
    event_end_time: "20:00",
    price: 17,
    location: "Planet Squanch",
    category: "Travel & Outdoor",
    max_attendees: 400,
  })

  e2.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/rick-morty.png"), filename: "rick-morty.jpg")

e3 = Event.create!({
    host_id: dan.id,
    title: "Dans Disco",
    description: "Dan disco",
    event_start: "2020-02-02",
    event_end: "2020-02-02",
    event_start_time: "13:09",
    event_end_time: "14:00",
    price: 100,
    location: "LI NY",
    category: "Auto, Boat & Air",
    max_attendees: 20,
  })

  e3.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/disco.jpg"), filename: "disco.jpg")

e4 = Event.create!({
    host_id: jim.id,
    title: "Lebrons Basketball Camp",
    description: "Come get dunked on six hours a day by Lebron James",
    event_start: "2021-03-20",
    event_end: "2021-03-22",
    event_start_time: "16:00",
    event_end_time: "20:00",
    price: 1200,
    location: "Los Angeles, CA",
    category: "Sports & Fitness",
    max_attendees: 999,
  })

  e4.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/lebron.jpg"), filename: "lebron.jpg")

e5 = Event.create!({
    host_id: jim.id,
    title: "Badger Busters",
    description: "Come bust up badgers with billy.  He's a badger busting fool.",
    event_start: "2020-11-11",
    event_end: "2020-11-12",
    event_start_time: "06:00",
    event_end_time: "08:00",
    price: 55,
    location: "Los Angeles, CA",
    category: "Hobbies",
    max_attendees: 55,
  })

e5.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/badger.jpg"), filename: "badger.jpg")

 e6 = Event.create!({
    host_id: peter.id,
    title: "DeadMouse",
    description: "Electronic music till your ears bleed",
    event_start: "2021-03-03",
    event_end: "2021-03-03",
    event_start_time: "23:00",
    event_end_time: "03:00",
    price: 55,
    location: "Amsterdam",
    category: "Music",
    max_attendees: 500,
  })

  e6.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/concert.jpg"), filename: "concert.jpg")

e7 =  Event.create!({
    host_id: aschel.id,
    title: "Salsa Dancing",
    description: "Come learn to salsa dance with world class Latinos",
    event_start: "2020-05-10",
    event_end: "2020-05-10",
    event_start_time: "20:00",
    event_end_time: "22:00",
    price: 87,
    location: "Harlem, NY",
    category: "Performing & Visual Arts",
    max_attendees: 30,
  })

  e7.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/salsa.jpg"), filename: "salsa.jpg")

e8 =  Event.create!({
    host_id: peter.id,
    title: "Pete's Pastries",
    description: "Come learn to make pastries with Pete, he knows how to roll that dough!",
    event_start: "2021-05-10",
    event_end: "2021-05-10",
    event_start_time: "10:00",
    event_end_time: "13:00",
    price: 25,
    location: "Atlanta, GA",
    category: "Food & Drink",
    max_attendees: 35,
  })

e8.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/pastries.jpg"), filename: "pastries.jpg")

e9 = Event.create!({
    host_id: peter.id,
    title: "Peter Kims Recovery",
    description: "He needs soup to feel better!!",
    event_start: "2020-08-03",
    event_end: "2020-08-03",
    event_start_time: "11:00",
    event_end_time: "12:00",
    price: 15,
    location: "NY, NY",
    category: "Food & Drink",
    max_attendees: 2,
  })

  e9.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/beef-pho.jpg"), filename: "beef-pho.jpg")

e10 = Event.create!({
    host_id: aschel.id,
    title: "Aschs Sas Class",
    description: "Come get classy with..Sass taught by...Asch",
    event_start: "2020-10-10",
    event_end: "2020-10-10",
    event_start_time: "21:00",
    event_end_time: "22:00",
    price: 100,
    location: "New Orleans, LA",
    category: "Home & Lifestyle",
    max_attendees: 4,
  })

  e10.photo.attach(io: open("https://boredom-breakers-seed.s3.amazonaws.com/aschel.jpg"), filename: "aschel.jpg")
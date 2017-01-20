# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all

#Users
guest = User.create!(username: "guest", password: "password",
  profile_img_url: "https://images.pexels.com/photos/26504/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb")

sports_news = User.create!(username: "sports_news", password: "espn123",
  profile_img_url: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?h=350&auto=compress")

game_of_thrones = User.create!(username: "gameofthrones", password: "password",
  profile_img_url: "http://www.likecroatia.com/wp-content/uploads/2014/06/Game-of-Thrones-Iron-Throne.jpg",
  followers: 5, followed: true)

warriors = User.create!(username: "gs_warriors", password: "godubs",
  profile_img_url: "http://content.sportslogos.net/logos/6/235/full/5gzur7f6x09cv61jt16smhopl.gif",
  followers: 7, followed: true)

giants = User.create!(username: "san_francisco_giants", password: "posey123",
  profile_img_url: "http://content.sportslogos.net/logos/54/74/full/1foo4n63rn1ejb8eds6sppper.gif",
  followers: 3, followed: true)

michael_cady = User.create!(username: "mcady2012", password: "gotexans",
  profile_img_url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?h=350&auto=compress",
  followers: 6, followed: false)

jack_reed = User.create!(username: "jreed949", password: "surfsup",
  profile_img_url: "https://images.pexels.com/photos/193355/pexels-photo-193355.jpeg?h=350&auto=compress",
  followers: 4, followed: true)

anna_ashe = User.create!(username: "anna-ashe", password: "hianna",
  profile_img_url: "https://images.pexels.com/photos/295821/pexels-photo-295821.jpeg?h=350&auto=compress&cs=tinysrgb",
  followers: 8, followed: false)

kelly_hanna = User.create!(username: "hi_its_kelly", password: "hannak",
  profile_img_url: "https://images.pexels.com/photos/47401/pexels-photo-47401.jpeg?h=350&auto=compress",
  followers: 6, followed: true)

lindsay_smith = User.create!(username: "lsmith43", password: "youllneverguessit",
  profile_img_url: "https://images.pexels.com/photos/227335/pexels-photo-227335.jpeg?h=350&auto=compress",
  followers: 7, followed: false)

Photo.create!(
  user_id: guest.id,
  image_url: "https://images.pexels.com/photos/111085/pexels-photo-111085.jpeg?h=350&auto=compress",
  caption: "Perfect evening for a sunset surf! So thankful for the ocean and the world we live in!!!")

Photo.create!(
  user_id: sports_news.id,
  image_url: "https://images.pexels.com/photos/106218/pexels-photo-106218.jpeg?h=350&auto=compress&cs=tinysrgb",
  caption: "It's almost that time of the year again. Baseball is back.")

# Photo.create!(
#   user_id: guest.id,
#   image_url: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
# )
#
# Photo.create!(
#   user_id: guest.id,
#   image_url: "https://images.pexels.com/photos/198217/pexels-photo-198217.jpeg?h=350&auto=compress&cs=tinysrgb",
#   caption: "A very creative caption.")
#
#   Photo.create!(
#     user_id: guest.id,
#     image_url: "https://images.pexels.com/photos/104928/pexels-photo-104928.jpeg?h=350&auto=compress&cs=tinysrgb",
#     caption: "Great day for a hike!.")

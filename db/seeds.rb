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
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938583/guestpp_j3pb6d.jpg")

sports_news = User.create!(username: "sports_news", password: "espn123",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938576/sportspp_yo73gx.jpg")

game_of_thrones = User.create!(username: "gameofthrones", password: "password",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938585/thronespp_foku8m.jpg",
  followers: 5, followed: true)

warriors = User.create!(username: "gs_warriors", password: "godubs",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938589/warriorspp_soyphj.gif",
  followers: 7, followed: true)

giants = User.create!(username: "san_francisco_giants", password: "posey123",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938587/giantspp_leqq4n.gif",
  followers: 3, followed: true)

michael_cady = User.create!(username: "mcady2012", password: "gotexans",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938584/macpp_awvfxc.jpg",
  followers: 6, followed: false)

jack_reed = User.create!(username: "jreed949", password: "surfsup",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938572/jackpp_urwmzz.jpg",
  followers: 4, followed: true)

chelseaaa = User.create!(username: "chelseaaa", password: "hianna",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938570/annapp_ehwevb.jpg",
  followers: 8, followed: false)

kelly_hanna = User.create!(username: "hi_its_kelly", password: "hannak",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938568/kellypp_jw4lnt.jpg",
  followers: 6, followed: true)

lindsay_smith = User.create!(username: "lsmith43", password: "youllneverguessit",
  profile_img_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484938566/lindsaypp_awbai5.jpg",
  followers: 7, followed: false)

Photo.create!(
  user_id: guest.id,
  image_url: "https://images.pexels.com/photos/111085/pexels-photo-111085.jpeg?h=350&auto=compress",
  caption: "Perfect evening for a sunset surf! So thankful for the ocean and the world we live in!!!")

Photo.create!(
  user_id: guest.id,
  image_url: "https://images.pexels.com/photos/3139/fun-adventure-boy-water-ski.jpg?h=350&auto=compress",
  caption: "Tbt to learning how to waterski! Can't wait to go back to Havasu this Summer!!!😜 😜 😜"
)

Photo.create!(
  user_id: sports_news.id,
  image_url: "https://images.pexels.com/photos/106218/pexels-photo-106218.jpeg?h=350&auto=compress&cs=tinysrgb",
  caption: "It's almost that time of the year again. Baseball is back.")

Photo.create!(
  user_id: sports_news.id,
  image_url: "https://images.pexels.com/photos/126401/pexels-photo-126401.jpeg?h=350&auto=compress",
  caption: "Ryan Tarnell getting back into mid-season form. Last year he had 47 catches and 11 TD's in only 13 games played.")

Photo.create!(
  user_id: warriors.id,
  image_url: "https://fansided.com/files/2014/12/stephen-curry-nba-orlando-magic-golden-state-warriors4.jpg",
  caption: "Steph selected to his fifth straight all star game. Heading into the break he leads the NBA with 142 three-pointers and is second in overall scoring.")

Photo.create!(
  user_id: game_of_thrones.id,
  image_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484939373/winter_qudpym.jpg",
  caption: "Winter is here.")

Photo.create!(
  user_id: giants.id,
  image_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484939414/att_kiupcm.jpg",
  caption: "Home sweet home. The giants were 50-32 at AT&T park last season. ")

Photo.create!(
  user_id: warriors.id,
  image_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1489596919/kd-warriors_wwaewq.jpg",
  caption: "Welcome to the Warriors Kevin Durant!")

Photo.create!(
user_id: lindsay_smith.id,
image_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484956769/bdovn9yefv1ef6ncrzk8.jpg",
caption: "Santa Barbara sunset!")

Photo.create!(
  user_id: chelseaaa.id,
  image_url: "https://res.cloudinary.com/dc4ro79uf/image/upload/v1484957319/amkqzizd7jogwhl5bzls.jpg",
  caption: "Perfect day for a hike!"
)

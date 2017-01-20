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
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938583/guestpp_j3pb6d.jpg")

sports_news = User.create!(username: "sports_news", password: "espn123",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938576/sportspp_yo73gx.jpg")

game_of_thrones = User.create!(username: "gameofthrones", password: "password",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938585/thronespp_foku8m.jpg",
  followers: 5, followed: true)

warriors = User.create!(username: "gs_warriors", password: "godubs",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938589/warriorspp_soyphj.gif",
  followers: 7, followed: true)

giants = User.create!(username: "san_francisco_giants", password: "posey123",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938587/giantspp_leqq4n.gif",
  followers: 3, followed: true)

michael_cady = User.create!(username: "mcady2012", password: "gotexans",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938584/macpp_awvfxc.jpg",
  followers: 6, followed: false)

jack_reed = User.create!(username: "jreed949", password: "surfsup",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938572/jackpp_urwmzz.jpg",
  followers: 4, followed: true)

anna_ashe = User.create!(username: "anna-ashe", password: "hianna",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938570/annapp_ehwevb.jpg",
  followers: 8, followed: false)

kelly_hanna = User.create!(username: "hi_its_kelly", password: "hannak",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938568/kellypp_jw4lnt.jpg",
  followers: 6, followed: true)

lindsay_smith = User.create!(username: "lsmith43", password: "youllneverguessit",
  profile_img_url: "http://res.cloudinary.com/dc4ro79uf/image/upload/v1484938566/lindsaypp_awbai5.jpg",
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
  user_id: game_of_thrones.id,
  image_url: "http://static2.businessinsider.com/image/56d991d5dd08953d0d8b4806-2000-1125/night%20king%20white%20walker%20hardhome%20game%20of%20thrones%20hbo.jpeg.jpg",
  caption: "Winter is here.")

# Photo.create!(
#   user_id: game_of_thrones.id,
#   image_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi4vcrOrdHRAhXDKGMKHQD_A2gQjBwIBA&url=http%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2Fgame-of-thrones-the-iron-throne.jpg&psig=AFQjCNFkIKBTShJJ-x_V_zGlLETz4Qi4Og&ust=1485023398273585",
#   caption: "2017 goals...")

Photo.create!(
  user_id: warriors.id,
  image_url: "http://fansided.com/files/2014/12/stephen-curry-nba-orlando-magic-golden-state-warriors4.jpg",
  caption: "Steph selected to his fifth straight all star game. Heading into the break he leads the NBA with 142 three-pointers and is second in overall scoring.")

Photo.create!(
  user_id: giants.id,
  image_url: "http://www.pva.org/atf/cf/%7BCA2A0FFB-6859-4BC1-BC96-6B57F57F0391%7D/ATT-Park.jpg",
  caption: "Home sweet home. The giants were 50-32 at AT&T park last season. ")

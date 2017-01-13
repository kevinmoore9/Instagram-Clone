# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "guest", password: "password",
  profile_img_url: "https://images.pexels.com/photos/26504/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb")

sports_news = User.create(username: "sports_news", password: "espn",
  profile_img_url: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?h=350&auto=compress")

Photo.create([
  { user_id: guest.id,
    image_url: "https://images.pexels.com/photos/111085/pexels-photo-111085.jpeg?h=350&auto=compress",
    caption: "Why am I holding a surfboard?! There aren't any waves..." },
  { user_id: sports_news.id,
    image_url: "https://images.pexels.com/photos/106218/pexels-photo-106218.jpeg?h=350&auto=compress&cs=tinysrgb",
    caption: "Almost time for baseball season." }
    ])

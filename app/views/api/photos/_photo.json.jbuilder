# json.extract! photo, :id, :user_id, :image_url, :caption, :user[:username]

  json.id photo.id
  json.user_id photo.user_id
  json.image_url photo.image_url
  json.caption photo.caption
  json.user_id photo.user.id
  json.username photo.user.username
  json.user_profile_url photo.user.profile_img_url

## Component Hierarchy

**AuthFormContainer**
* AuthForm

**Navbar**
* Search
* HomeButton
* NotificationIndex
  * NotificationItem
* ProfileButton

**FeedContainer**
* FeedIndex
  * FeedIndexItem
    * CommentForm
      * LikeButton

**ProfileContainer**
* ProfileHeader
* LogOut Button
* ProfileIndex
  * ProfileIndexItem

**ImageContainer**
* ImageHeader
* Comments
* Likes
* CommentForm
  * Like Button

**PostFormContainer**
* PostForm

## Routes

| Path                        | Component           |
| --------------------------  | ------------------- |
| "/sign-up"                  | "AuthFormContainer" |
| "/login"                    | "AuthFormContainer" |
| "/"                         | "FeedContainer"     |
| "/users/:username"          | "ProfileContainer"  |
| "/users/:username/:imageId" | "ImageContainer"    |
| "/users/:username/post"     | "PostFormContainer"     |

## Component Hierarchy

**SessionFormContainer**
* SessionForm

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

| Path                        | Component              |
| --------------------------  | ---------------------- |
| "/signup"                   | "SessionFormContainer" |
| "/login"                    | "SessionFormContainer" |
| "/"                         | "FeedContainer"        |
| "/users/:username"          | "ProfileContainer"     |
| "/users/:username/:imageId" | "ImageContainer"       |
| "/users/:username/post"     | "PostFormContainer"    |

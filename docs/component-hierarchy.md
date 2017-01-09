## Component Hierarchy

**AuthFormContainer**
* AuthForm

**Navbar**
* Search
* HomeButton
* NotificationIndex
  * NotificationItem
* ProfileButton

**HomeContainer**
* Images

**ProfileContainer**
* ProfileHeader
* LogOut Button
* ImageDetail

**ImageContainer**
* ImageHeader
* Comments
* CommentForm
* Likes

**PostFormContainer**
* PostForm

## Routes

| Path                        | Component           |
| --------------------------  | ------------------- |
| "/sign-up"                  | "AuthFormContainer" |
| "/login"                    | "AuthFormContainer" |
| "/home"                     | "HomeContainer"     |
| "/images"                   | "HomeContainer"     |
| "/users/:username"          | "ProfileContainer"  |
| "/users/:username/:imageId" | "ImageContainer"    |
| "/users/:username/post"     | "PostContainer"     |

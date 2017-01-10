# Instagram Clone

[Heroku](www.heroku.com)
[Instagram](www.instagram.com)

## Minimum Viable Product

InstaClone (name change coming soon) is a web application inspired
by the Instagram mobile application. It will be built using Ruby on
Rails and React/Redux. By the end of week 9, it will be a fully
functional web app with smooth navigation, adequate seed data and
clean and appealing CSS styling. Additionally it will, at a minimum,
satisfy the following criteria:

* Hosting on Heroku
* Account Creation, SignIn / Sign Out, Guest/Demo LogIn
* Images
* Likes
* Comments on Images
* Following / Main Feed w/ Infinite Scroll
* Production README



## Design Docs

* [View Wireframes](wireframes)
* [React Components](component-hierarchy.md)
* [API Endpoints](api-endpoints.md)
* [DB Schema](schema.md)
* [Sample State](sample-state.md)

## Implementation Timeline

### Phase 1: Set Up Back End & User Auth (2 days)
**Objective:** Functioning Rails app with front-end auth.

### Phase 2: Image Model, API, Component (1 day)
**Objective:** Images can be created and destroyed through API.

### Phase 3: Post Form and User Profile Page (1 day)
**Objective:** User profile page displays all of a users posted photos as well as profile information. Post form allows users to post new photos.

### Phase 4: Home Container and NavBar (2 days)
**Objective:** Image feed of followed users. Navigation bar has functional home/profile buttons, user search, and toggle-show for like and follow notifications.

### Phase 5: Comment Model, API, Form (1 day)
**Objective:** Users can comment on and like photos.

### Phase 6: Like Model, API (1 day)
**Objective:** Users can like photos. Photos count likes.

### Phase 7: CSS Touch Up (1 day)
**Objective:** Finalize all features and finish formatting and display of presentational components.


### Bonus Features (TBD Time Permitting)

* Infinite Scroll
* Comment Tags (direct messages)
* HashTags
* User / HashTag search

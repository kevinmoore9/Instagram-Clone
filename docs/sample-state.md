{
  currentUser: {
    id: 1,
    username: "kevinmoore"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: ["invalid login credentials"]},
    post: {errors: []}
  },
  photos: {
    1: {
      id: 1,
      user_id: 1,
      image_url: "www.image-url.com",
    },
    2: {
      id: 5,
      user_id: 22,
      image_url: "anotherimage.com",
    }
  },
  photoDetail: {
    id: 1,
    image_url: "www.image-url.com",
    caption: "my first picture",
    comments: {
      1: {
        user_id: 3,
        body: "this is a comment"
      },
      2: {
        user_id: 5,
        body: "this is another comment"
      }
    },
    likes: {
      1: {
        user_id: 3
      },
      2: {
        user_id: 4
      }
    }
  }
}

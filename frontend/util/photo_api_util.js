export const createPhoto = (photo) => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photo
  })
);

export const updatePhoto = (params) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${params.photo.id}`,
    data: params
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`,
  })
);

export const fetchPhotos = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/photos',
    data
  })
);

export const createComment = params => {
  return (
  $.ajax ({
    method: 'POST',
    url: 'api/comments',
    data: params
  })
);
};



// destroy

// fetch photos for individual user (profile) and users (feed)

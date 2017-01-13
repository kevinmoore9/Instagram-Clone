export const createPhoto = (photo) => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photo
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





// destroy

// fetch photos for individual user (profile) and users (feed)

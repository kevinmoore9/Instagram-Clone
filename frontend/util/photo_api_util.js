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

export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);





// destroy

// fetch photos for individual user (profile) and users (feed)

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

// Below not in user

export const createLike = params => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/comments',
      data: params
    })
  );
};

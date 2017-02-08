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
    url: 'api/comments/',
    data: params
  })
);
};

export const createLike = params => {
  return(
    $.ajax({
      method: 'POST',
      url: 'api/likes/',
      data: params
    })
  );
};

export const deleteLike = params => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/likes/${params.id}/`,
      data: params
    })
  );
};

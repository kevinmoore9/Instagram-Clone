export const createLike = (params) => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: params
  })
);

export const removeLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  })
);

export const fetchLikes = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/likes',
    data
  })
);

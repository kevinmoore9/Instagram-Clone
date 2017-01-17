export const createLike = (like) => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: like
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

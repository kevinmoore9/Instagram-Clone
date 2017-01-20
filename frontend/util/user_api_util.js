export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: user
  })
);

export const updateFollow = follow => {

  return (
    $.ajax({
      method: 'POST',
      url: '/api/follows',
      data: follow
    })
  );
};

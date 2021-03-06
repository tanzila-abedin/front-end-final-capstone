const url = process.env.REACT_APP_SERVER_URL;
const usersEndpoint = `${url}/users`;
const reviewsEndpoint = `${url}/reviews`;

export const postUser = (data, accessToken) => {
  fetch(usersEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const postReview = (data, accesstoken) => fetch(reviewsEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${accesstoken}`,
  },
  body: JSON.stringify(data),
});

export const getLaptopReviews = async (accessToken, id) => {
  const laptopReviewsEndpoint = `${url}/reviews/${id}`;
  const response = await fetch(laptopReviewsEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const laptopReviews = await response.json();
  return laptopReviews;
};

export const deleteReviews = async (accessToken, id) => {
  const laptopReviewsEndpoint = `${url}/reviews/${id}`;
  const response = await fetch(laptopReviewsEndpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const laptopReviews = await response.json();
  return laptopReviews;
};

export const getUserReviews = async (accessToken, data) => {
  const response = await fetch(reviewsEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
      body: data,
    },
  });
  const userReviews = await response.json();
  return userReviews;
};

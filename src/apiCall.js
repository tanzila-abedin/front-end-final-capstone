const url = 'http://localhost:3000';
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

export const getUsers = async () => {
  const response = await fetch(usersEndpoint);
  const users = await response.json();
  return users;
};

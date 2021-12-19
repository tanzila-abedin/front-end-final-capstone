import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { getUserReviews, deleteReviews } from '../apiCall';
import ReviewCard from './reviewCard';

const userRatingList = () => {
  const [userRating, setUserRating] = useState('');
  console.log(userRating);
  const [removeRating, setRemoveRating] = useState(true);
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => getUserReviews(accessToken, user.sub))
        .then((userReviews) => {
          setUserRating(userReviews);
        });
    }
  }, [removeRating]);

  const handleDelete = (id) => {
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => deleteReviews(accessToken, id))
        .then(() => setRemoveRating(!removeRating));
    }
  };

  return (
    <div>
      {userRating ? userRating.map((items) => (

        <ReviewCard
          key={items.id}
          reviewProp={items}
          handleDelete={handleDelete}
        />
      )) : <p>there are no reviews yet</p>}
    </div>
  );
};

export default userRatingList;

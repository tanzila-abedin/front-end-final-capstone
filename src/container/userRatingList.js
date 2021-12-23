import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { getUserReviews, deleteReviews } from '../apiCall';
import ReviewCard from '../component/reviewCard';

const userRatingList = () => {
  const [userRating, setUserRating] = useState('');
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
    <div className="container p-5">
      <h2 className="text-center">ALL REVIEWS</h2>
      <p className="text-center text-muted">Find All your reviews</p>
      {userRating ? userRating.map((items) => (
        <ReviewCard
          key={items.id}
          reviewProp={items}
          handleDelete={handleDelete}
        />
      )) : <div>You Have No Reviews Yet!</div>}
    </div>
  );
};

export default userRatingList;

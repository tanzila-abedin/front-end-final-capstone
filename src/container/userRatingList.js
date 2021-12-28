import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { getUserReviews, deleteReviews } from '../apiCall';
import ReviewCard from '../component/reviewCard';

const userRatingList = () => {
  const [userRating, setUserRating] = useState('');
  const [removeRating, setRemoveRating] = useState(true);
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getReviews() {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        const userReviews = await getUserReviews(token, user.sub);
        const updateReviews = setUserRating(userReviews);
        return updateReviews;
      }
      return undefined;
    }
    getReviews();
  }, [removeRating]);

  const handleDelete = (id) => {
    async function removeReview() {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        await deleteReviews(token, id);
        const updateReviewList = setRemoveRating(!removeRating);
        return updateReviewList;
      }
      return undefined;
    }
    removeReview();
  };

  return (
    <div className="container p-5">
      <h2 className="text-center">REVIEWS</h2>
      <p className="text-center text-muted">Find your shared experience here</p>
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

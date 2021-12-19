import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

const ReviewCard = ({ reviewProp, handleDelete }) => {
  const { user } = useAuth0();
  return (
    <>
      <div>
        <img src={user.picture} alt="gravatar" />
        <h4>
          {reviewProp.user_email}
          {' '}
          created :
        </h4>
      </div>
      <p>
        For:
        {' '}
        {reviewProp.laptop_model}
      </p>
      <p>
        title:
        {' '}
        {reviewProp.title}
      </p>
      <p>
        description:
        {' '}
        {reviewProp.description}
      </p>
      <p>
        rating :
        {' '}
        {reviewProp.rating}
      </p>
      {reviewProp.user_email === user.nickname && <button type="submit" onClick={() => handleDelete(reviewProp.id)}>delete review!</button> }
    </>
  );
};

export default ReviewCard;

ReviewCard.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  reviewProp: PropTypes.shape({
    user_email: PropTypes.string,
    laptop_model: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

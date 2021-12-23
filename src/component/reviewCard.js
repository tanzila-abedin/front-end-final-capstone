import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import ReactStars from 'react-stars';

const ReviewCard = ({ reviewProp, handleDelete }) => {
  const { user } = useAuth0();
  return (
    <>
      <div className="d-flex flex-row align-items-center">
        <img src={user.picture} className="rounded-circle gravatar" alt="gravatar" />
        <h4 className="p-1">
          {reviewProp.user_email}
          {' '}
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
      <ReactStars
        count={5}
        value={reviewProp.rating}
        edit={false}
        half={false}
        size={24}
        color2="#ffd700"
      />
      {reviewProp.user_email === user.nickname && <button type="submit" className="btn bm-burger-bars  text-light all-btns" onClick={() => handleDelete(reviewProp.id)}>remove</button> }
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

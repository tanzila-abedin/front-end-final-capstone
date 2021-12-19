import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SingleCard from './singleCard';
import { fetchDetailApi } from '../redux/actions/creator';
import { postReview, getLaptopReviews, deleteReviews } from '../apiCall';
import ReviewCard from './reviewCard';

const SingleDetail = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [laptopReviews, setLaptopReviews] = useState('');
  const { details } = useSelector((state) => state);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('1');
  const [removeRating, setRemoveRating] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchDetailApi(id),
    );
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => getLaptopReviews(accessToken, id))
        .then((laptopReviews) => {
          setLaptopReviews(laptopReviews);
        });
    }
  }, [removeRating]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      user_email: user.nickname,
      laptop_model: details.detail.slug,
      title,
      description,
      rating,
      user_sub: user.sub,
      laptop_id: details.detail.id,
    };
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => postReview(review, accessToken))
        .then(() => setRemoveRating(!removeRating));
    }
  };

  const handleDelete = (id) => {
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((accessToken) => deleteReviews(accessToken, id))
        .then(() => setRemoveRating(!removeRating));
    }
  };

  return (
    <div>
      {details.detail ? (
        <>
          <div className="pb-5">
            <SingleCard laptopProp={details.detail} />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <p>
                {' '}
                Have an experience with
                {' '}
                <strong>{details.detail.name}</strong>
                {' '}
                ? Add your review!
              </p>
              <label htmlFor="userName">
                {' '}
                By:
                <input
                  id="userName"
                  type="text"
                  required
                  readOnly
                  value={user.nickname}
                />
              </label>

              <label htmlFor="laptopModel">
                {' '}
                Model:
                <input
                  id="laptopModel"
                  type="text"
                  required
                  readOnly
                  value={details.detail.slug}
                />
              </label>

              <label htmlFor="title">
                {' '}
                title:
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="description">
                Description:
                <textarea
                  id="description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label htmlFor="rate">
                Rate out of 5:
                <select
                  id="rate"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>

                </select>
              </label>
              <button type="submit">create review!</button>
            </form>
          </div>
          <div>
            {laptopReviews ? laptopReviews.map((items) => (

              <ReviewCard
                key={items.id}
                reviewProp={items}
                handleDelete={handleDelete}
              />
            )) : <p>there are no reviews yet</p>}
          </div>

        </>
      ) : <p>loading</p> }
    </div>
  );
};

export default SingleDetail;

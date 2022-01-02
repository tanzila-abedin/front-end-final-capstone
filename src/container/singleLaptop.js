import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ReactStars from 'react-stars';
import SingleCard from '../component/singleCard';
import { fetchDetailApi } from '../redux/actions/creator';
import { postReview, getLaptopReviews, deleteReviews } from '../apiCall';
import ReviewCard from '../component/reviewCard';

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
    async function getReviews() {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        const getReviews = await getLaptopReviews(token, id);
        const returnReviews = setLaptopReviews(getReviews);
        return returnReviews;
      }
      return undefined;
    }
    getReviews();
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
    <div className="pt-5">
      {details.detail ? (
        <>
          <div className="d-flex  flex-row justify-content-center">
            <SingleCard laptopProp={details.detail} />
          </div>
          <div className=" d-flex flex-row justify-content-center bg-light p-5">
            <div className="review-container">
              {laptopReviews ? laptopReviews.map((items) => (

                <ReviewCard
                  key={items.id}
                  reviewProp={items}
                  handleDelete={handleDelete}
                />
              )) : <p>there are no reviews yet</p>}
            </div>
            <div className="review-form">
              <form onSubmit={handleSubmit}>
                <p>
                  {' '}
                  Have an experience with
                  {' '}
                  <strong>{details.detail.name}</strong>
                  {' '}
                  ? Rate and Review!
                </p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="userName">
                      {' '}
                      By:
                      {' '}

                    </label>
                    <input
                      id="userName"
                      type="text"
                      required
                      readOnly
                      value={user.nickname}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="laptopModel">
                      {' '}
                      Model:
                      {' '}

                    </label>
                    <input
                      id="laptopModel"
                      type="text"
                      required
                      readOnly
                      value={details.detail.slug}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="title">
                      {' '}
                      Title:
                      {' '}

                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="description">
                      Description:
                      {' '}

                    </label>
                    <textarea
                      id="description"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="rate">
                      Rate out of 5:
                      {' '}

                    </label>
                    {/* <select
                      id="rate"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>

                    </select> */}
                    <ReactStars
                      count={5}
                      onChange={setRating}
                      value={rating}
                      half={false}
                      size={24}
                      color2="#ffd700"
                    />
                  </div>
                  <button type="submit" className=" btn bm-burger-bars all-btns  text-light">create</button>
                </div>
              </form>
            </div>
          </div>

        </>
      ) : <p>loading</p> }
    </div>
  );
};

export default SingleDetail;

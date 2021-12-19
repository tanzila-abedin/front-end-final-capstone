import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { postUser } from '../apiCall';

const Navigate = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated) {
    const userData = {
      user_sub: user.sub,
      email: user.email,
    };
    getAccessTokenSilently().then((accessToken) => {
      postUser(userData, accessToken);
    });
  }
  return isAuthenticated ? (
    <>
      <LogoutButton />
      {' '}
      <Link className="nav-text font-weight-normal" to="/">Home</Link>
      <Link to="/AllRatings">Reviews</Link>
      <p>
        {' '}
        Welcome
        {' '}
        {user.nickname}
        !
      </p>
      {' '}
      {' '}
    </>
  ) : <LoginButton />;
};

export default Navigate;

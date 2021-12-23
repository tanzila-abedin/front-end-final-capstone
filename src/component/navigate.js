import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import LoginButton from '../auth0/loginButton';
import LogoutButton from '../auth0/logoutButton';
import { getUsers, postUser } from '../apiCall';

const Navigate = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated) {
    const userData = {
      user_sub: user.sub,
      email: user.email,
    };
    getAccessTokenSilently().then((accessToken) => {
      postUser(userData, accessToken);
      getUsers();
    });
  }
  return isAuthenticated ? (
    <>
      <Menu className="overflow-hidden">
        <h4>
          {' '}
          Hello
          {' '}
          {user.nickname}
        </h4>
        <Link className="menu-item" to="/">HOME</Link>
        <Link className="menu-item" to="/models">LAPTOPS</Link>

        <Link className="menu-item" to="/AllRatings">REVIEWS</Link>
        <LogoutButton className="btn btn-primary menu-item" />
      </Menu>
    </>
  ) : (
    <>
      <Menu isOpen={false}>
        <LoginButton className="menu-item btn all-btns" />
        <Link className="menu-item" to="/">HOME</Link>
        <Link className="menu-item" to="/models">LAPTOPS</Link>
      </Menu>
    </>
  );
};

export default Navigate;

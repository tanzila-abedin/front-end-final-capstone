import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link className="menu-item item-hover" to="/">
      <button type="button" className="all-btns btn bm-burger-bars text-white" onClick={() => logout()}>
        Log Out
      </button>
    </Link>
  );
};

export default LogoutButton;

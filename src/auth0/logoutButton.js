import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button type="button" className="all-btns btn bm-burger-bars text-white" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>

  );
};

export default LogoutButton;

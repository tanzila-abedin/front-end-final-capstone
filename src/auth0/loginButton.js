import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (

    <button type="button" className="all-btns btn bm-burger-bars text-white" onClick={() => loginWithRedirect()}>
      Log In
    </button>

  );
};

export default LoginButton;

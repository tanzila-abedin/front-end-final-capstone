import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <div>Loading</div>,
    })}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...args}
  />
);

export default ProtectedRoute;

import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const domain = 'dev-jbjb2jlg.us.auth0.com';
const clientId = 'KIqoTb82c6z7Zujrmog9hDyi8P8pCzq6';
const audience = 'https://rails-secure-api';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root'),
);

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LaptopList from './container/laptopList';
import Navigate from './component/navigate';
import ProtectedRoute from './auth0/protectedRoute';
import SingleLaptop from './container/singleLaptop';
import userRatingList from './container/userRatingList';
import Welcome from './component/welcome';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter id="app">
      <Navigate pageWrapId="page-wrap" outerContainerId="app" />
      <Switch id="page-wrap">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/models" component={LaptopList} />
        <ProtectedRoute path="/singleLaptop/:id" component={SingleLaptop} />
        <ProtectedRoute path="/AllRatings" component={userRatingList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

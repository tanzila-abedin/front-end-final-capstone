import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LaptopList from './container/laptopList';
import Navigate from './component/navigate';
import ProtectedRoute from './auth0/protectedRoute';
import SingleLaptop from './container/singleLaptop';
import userRatingList from './container/userRatingList';
import Welcome from './component/welcome';

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/models" component={LaptopList} />
        <ProtectedRoute path="/singleLaptop/:id" component={SingleLaptop} />
        <ProtectedRoute path="/AllRatings" component={userRatingList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

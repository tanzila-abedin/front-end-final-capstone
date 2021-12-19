import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LaptopList from './conponent/laptopList';
import Navigate from './conponent/navigate';
import ProtectedRoute from './conponent/protectedRoute';
import SingleLaptop from './conponent/singleLaptop';
import userRatingList from './conponent/userRatingList';
// import Footer from './footer';

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Switch>
        <Route exact path="/" component={LaptopList} />
        <ProtectedRoute path="/singleLaptop/:id" component={SingleLaptop} />
        <ProtectedRoute path="/AllRatings" component={userRatingList} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

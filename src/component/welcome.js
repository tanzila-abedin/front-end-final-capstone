import { Link } from 'react-router-dom';

const Welcome = () => (

  <div className="text-center welcome-container">
    <h1 className="p-0 ">Welcome to DevLaps</h1>
    <Link className="nav-text font-weight-normal btn bm-burger-bars all-btns  text-light" to="models">See laptop</Link>
  </div>

);

export default Welcome;

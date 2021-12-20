import { Link } from 'react-router-dom';

const Welcome = () => (
  <>
    <h1>Welcome to DEVLAPS</h1>
    <Link className="nav-text font-weight-normal" to="models">See laptop</Link>
  </>
);

export default Welcome;

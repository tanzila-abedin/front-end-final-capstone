import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const LaptopCard = ({ laptopProp }) => (
  <div className="pr-10 pl-10 pt-5 pb-5 text-center ">
    <img className="pb-2 laptop-img" src={laptopProp.image_url} alt="laptop-card" />
    <h5>
      {laptopProp.name}
    </h5>
    <Link className="btn bm-burger-bars  text-light all-btns" to={`/SingleLaptop/${laptopProp.id}`}>
      View More
    </Link>
  </div>
);

LaptopCard.propTypes = {
  laptopProp: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};

export default LaptopCard;

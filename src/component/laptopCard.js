import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LaptopCard = ({ laptopProp }) => (
  <div>
    <img className="w-100 mb-2" src={laptopProp.image_url} alt="laptop-card" />
    <h5 className="text-light card-title">
      {laptopProp.name}
    </h5>
    <Link className="btn btn-warning" to={`/SingleLaptop/${laptopProp.id}`}>
      Details
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

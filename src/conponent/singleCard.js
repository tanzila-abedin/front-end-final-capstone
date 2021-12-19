import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCard = ({ laptopProp }) => (
  <>
    <div>
      <img className="w-100 mb-2" src={laptopProp.image_url} alt="laptop-card" />
      <h5 className="text-light card-title">
        {laptopProp.name}
      </h5>
    </div>
    <div>
      <p>
        display:
        {' '}
        {laptopProp.display}
      </p>
      <p>
        processor:
        {' '}
        {laptopProp.processor}
      </p>
      <p>
        memory:
        {' '}
        {laptopProp.memory}
      </p>
      <p>
        storage:
        {' '}
        {laptopProp.storage}
      </p>
      <p>
        graphics:
        {' '}
        {laptopProp.graphics}
      </p>
      <p>
        operating system:
        {' '}
        {laptopProp.operating_system}
      </p>
      <p>
        battery life:
        {' '}
        {laptopProp.battery_life}
      </p>
      <p>
        price:
        {' '}
        {laptopProp.price}
      </p>
      <p>
        {' '}
        <Link to={{ pathname: laptopProp.amazon }} target="_blank"> Buy from Amazon</Link>
      </p>
    </div>
  </>
);

export default SingleCard;

SingleCard.propTypes = {
  laptopProp: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    display: PropTypes.string,
    memory: PropTypes.string,
    processor: PropTypes.string,
    storage: PropTypes.string,
    graphics: PropTypes.string,
    operating_system: PropTypes.string,
    battery_life: PropTypes.string,
    price: PropTypes.string,
    amazon: PropTypes.string,

  }).isRequired,
};

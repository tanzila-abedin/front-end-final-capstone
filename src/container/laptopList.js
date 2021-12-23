import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { fetchLaptopApi } from '../redux/actions/creator';
import LaptopCard from '../component/laptopCard';
import '../styles/index.css';

const LaptopList = () => {
  const { laptops } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchLaptopApi(),
    );
  }, []);

  const breakPoints = [
    {
      width: 500, itemsToShow: 1,
    },
    {
      width: 768, itemsToShow: 2,
    },
    {
      width: 1200, itemsToShow: 3,
    },

  ];

  return (

    <div className="pt-5">
      <h2 className="text-center">LATEST MODELS</h2>
      <p className="text-center text-muted">Please select a Laptop Model</p>
      <Carousel breakPoints={breakPoints}>
        { laptops.laptops
          ? laptops.laptops.map((laptop) => <LaptopCard key={laptop.id} laptopProp={laptop} />)
          : <div>loading </div>}
      </Carousel>
    </div>
  );
};

export default LaptopList;

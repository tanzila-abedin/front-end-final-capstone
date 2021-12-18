import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaptopApi } from '../redux/actions/creator';
import LaptopCard from './laptopCard';

const LaptopList = () => {
  const { laptops } = useSelector((state) => state);
  console.log(laptops);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchLaptopApi(),
    );
  }, []);

  return (
    <div>
      { laptops.laptops
        ? laptops.laptops.map((laptop) => <LaptopCard key={laptop.id} laptopProp={laptop} />)
        : <div>loading </div>}
    </div>
  );
};

export default LaptopList;

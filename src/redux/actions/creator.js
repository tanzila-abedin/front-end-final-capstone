import axios from 'axios';
import {
  FETCH_LAPTOPS, FETCH_LAPTOP_DETAIL,
} from './type';

const fetchLaptops = (laptops) => ({
  type: FETCH_LAPTOPS,
  payload: laptops,
});

const fetchLaptopDetail = (laptop) => ({
  type: FETCH_LAPTOP_DETAIL,
  payload: laptop,
});

const fetchLaptopApi = () => async (dispatch) => {
  const laptopUrl = 'http://localhost:3000/laptops';
  try {
    const response = await axios.get(laptopUrl);
    const users = response.data;
    dispatch(fetchLaptops(users));
  } catch (error) {
    console.log(error.message);
  }
};

const fetchDetailApi = (id) => async (dispatch) => {
  const laptopUrl = `http://localhost:3000/laptops/${id}`;
  try {
    const response = await axios.get(laptopUrl);
    const laptopDetail = response.data;
    dispatch(fetchLaptopDetail(laptopDetail));
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchLaptopApi, fetchDetailApi };

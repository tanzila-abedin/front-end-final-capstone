import axios from 'axios';
import {
  FETCH_LAPTOPS, FETCH_LAPTOP_DETAIL,
} from './type';

const host = process.env.REACT_APP_SERVER_URL;
// const host = 'http://localhost:3000';

const fetchLaptops = (laptops) => ({
  type: FETCH_LAPTOPS,
  payload: laptops,
});

const fetchLaptopDetail = (laptop) => ({
  type: FETCH_LAPTOP_DETAIL,
  payload: laptop,
});

const fetchLaptopApi = () => async (dispatch) => {
  const laptopUrl = `${host}/laptops`;
  try {
    const response = await axios.get(laptopUrl);
    const users = response.data;
    dispatch(fetchLaptops(users));
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchDetailApi = (id) => async (dispatch) => {
  const laptopUrl = `${host}/laptops/${id}`;
  try {
    const response = await axios.get(laptopUrl);
    const laptopDetail = response.data;
    dispatch(fetchLaptopDetail(laptopDetail));
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchLaptopApi, fetchDetailApi };

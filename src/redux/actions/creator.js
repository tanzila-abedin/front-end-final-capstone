import axios from 'axios';
import {
  FETCH_LAPTOPS, FETCH_LAPTOP_DETAIL,
} from './type';

const host = 'https://devlaps-backend.herokuapp.com';

const fetchLaptops = (laptops) => ({
  type: FETCH_LAPTOPS,
  payload: laptops,
});

const fetchLaptopDetail = (laptop) => ({
  type: FETCH_LAPTOP_DETAIL,
  payload: laptop,
});

const fetchLaptopApi = () => async (dispatch) => {
  try {
    const response = await axios.get(host);
    const users = response.data;
    dispatch(fetchLaptops(users));
  } catch (error) {
    console.log(error.message);
  }
};

const fetchDetailApi = (id) => async (dispatch) => {
  const laptopUrl = `${host}/laptops/${id}`;
  try {
    const response = await axios.get(laptopUrl);
    const laptopDetail = response.data;
    dispatch(fetchLaptopDetail(laptopDetail));
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchLaptopApi, fetchDetailApi };

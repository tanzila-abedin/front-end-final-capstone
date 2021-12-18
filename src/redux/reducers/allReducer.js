import { FETCH_LAPTOPS, FETCH_LAPTOP_DETAIL } from '../actions/type';

const laptopsReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_LAPTOPS:
      return {
        ...state,
        laptops: action.payload,
      };
    default: return state;
  }
};

const detailsReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_LAPTOP_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default: return state;
  }
};

export { laptopsReducers, detailsReducers };

import { combineReducers } from 'redux';
import { laptopsReducers, detailsReducers } from './allReducer';

const rootReducer = combineReducers({
  laptops: laptopsReducers,
  details: detailsReducers,
});

export default rootReducer;

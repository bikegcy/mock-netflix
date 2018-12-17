import { combineReducers } from 'redux';
import mylists from './mylistsReducer';
import recommLists from './recommReducer';

const rootRudecer = combineReducers({
  mylists,
  recommLists
});

export default rootRudecer;
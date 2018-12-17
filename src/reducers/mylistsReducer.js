// import { ADD_FILM, DELETE_FILM } from '../actions/types';
import data from '../data/mylists'

const initialState = {
  mylists: data.mylist || []
};

const mylists = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FILM':
      console.log('mylist add action received');
      console.log(action);
      return {
        ...state,
        mylists: [...(state.mylists), action.payload]
      };
    case 'DELETE_FILM':
      return {
        ...state,
        mylists: state.mylists.filter(film => film.id !== action.payload)
      };
    default:
      return state;
  }
}

export default mylists;
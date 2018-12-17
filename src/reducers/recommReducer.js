// import { ADD_RECOMM_FILM, DELETE_RECOMM_FILM } from '../actions/types';
import data from '../data/mylists';

const initialState = {
  recommLists: data.recommendations || []
};

const recommLists = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_RECOMM_FILM':
      return {
        ...state,
        recommLists: [...state.recommLists, action.payload]
      };
    case 'DELETE_RECOMM_FILM':
      return {
        ...state,
        recommLists: state.recommLists.filter(film => film.id !== action.payload)
      };
    default:
      return state;
  }
};

export default recommLists;
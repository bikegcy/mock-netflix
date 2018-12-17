// import { ADD_COMM_FILM, DELETE_COMM_FILM } from './types'

export const addRecommFilm = film => dispatch => {
  dispatch({
    type: 'ADD_RECOMM_FILM',
    payload: film
  })
};

export const deleteRecommFilm = id => dispatch => {
  dispatch({
    type: 'DELETE_RECOMM_FILM',
    payload: id
  })
};


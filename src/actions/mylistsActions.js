export const addFilm = film => dispatch => {
  dispatch({
    type: 'ADD_FILM',
    payload: film
  })
};

export const deleteFilm = id => dispatch => {
  dispatch({
    type: 'DELETE_FILM',
    payload: id
  })
};


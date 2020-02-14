import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // Get our techs from db.json and convert to json
    const res = await fetch('/techs');
    const data = await res.json();

    // dispatch action.type as GET_TECHS and action.payload as the data received
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    // If we get an error dispathc action.type as TECHS_ERROR and the payload as the error data
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

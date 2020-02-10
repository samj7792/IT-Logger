import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }

// more simply done
// Get Logs from server
export const getLogs = () => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // Get our logs from db.json and convert to json
    const res = await fetch('/logs');
    const data = await res.json();

    // dispatch action.type as GET_LOGS and action.payload as the data received
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    // If we get an error dispathc action.type as LOGS_ERROR and the payload as the error data
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Add new log
export const addLog = log => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // post our new log
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    // dispatch action.type as ADD_LOG and action.payload as the data received
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    // If we get an error dispatch action.type as LOGS_ERROR and the payload as the error data
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

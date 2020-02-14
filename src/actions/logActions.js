import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT
} from './types';

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
      payload: err.response.statusText
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
      payload: err.response.statusText
    });
  }
};

// Delete log from server
export const deleteLog = id => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // We dont need to store any variable so simply await fetch()
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    // dispatch action.type as DELETE_LOG and action.payload as the id
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    // If we get an error dispathc action.type as LOGS_ERROR and the payload as the error data
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // update our  log
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    // dispatch action.type as UPDATE_LOG and action.payload as the data received
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    // If we get an error dispatch action.type as LOGS_ERROR and the payload as the error data
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search logs
export const searchLogs = text => async dispatch => {
  try {
    // Call setLoading to make loading true
    setLoading();

    // Make a request to logs with a query of text
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    // dispatch action.type as SEARCH_LOGS and action.payload as the data received
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    // If we get an error dispathc action.type as LOGS_ERROR and the payload as the error data
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

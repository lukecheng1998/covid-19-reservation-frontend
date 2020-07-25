import {
  POST_EVENTS,
  LOADING_UI,
  LOADING_DATA,
  SET_ERRORS,
  SET_EVENTS,
  CLEAR_ERRORS,
  STOP_LOADING_UI,
} from "../types";
import axios from "axios";
export const getEvents = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/event")
    .then((res) => {
      dispatch({
        type: SET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_EVENTS,
        payload: [],
      });
    });
};
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
export const postEvents = (newEvent) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/event", newEvent)
    .then((res) => {
      dispatch({
        type: POST_EVENTS,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch({type: STOP_LOADING_UI})
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

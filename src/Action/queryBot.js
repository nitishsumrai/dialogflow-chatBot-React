import {
  QUERRY_SUCCESS,
  QUERRY_FAIL,
  QUERRY_START,
  ADD_INTENT,
  VISIBILITY,
} from "./ActionTypes";

import { getFormBody } from "../helpers.js/utils";
export function startQuerry() {
  return {
    type: QUERRY_START,
  };
}
export function querryFailed(errorMessage) {
  return {
    type: QUERRY_FAIL,
    error: errorMessage,
  };
}
export function startQuerying(userQuery) {
  console.log("**********", userQuery);
  return (dispatch) => {
    dispatch(startQuerry());
    const urlApi = `http://localhost:8000/api/v1/query-bot`;
    fetch(urlApi, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: getFormBody({ userQuery }),
    })
      .then((resolve) => resolve.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          dispatch(queriedSuccessfully(data.data.msg, userQuery));
          dispatch(sendIntent(data.data.intent));
          return;
        }
        dispatch(querryFailed(data.message));
      });
  };
}
export function queriedSuccessfully(msg, userQuery) {
  return {
    type: QUERRY_SUCCESS,
    response: msg,
    request: userQuery,
  };
}
export function sendIntent(intent) {
  return {
    type: ADD_INTENT,
    intent: intent,
  };
}
export function setVisibility(visibility) {
  return {
    type: VISIBILITY,
    visibility,
  };
}

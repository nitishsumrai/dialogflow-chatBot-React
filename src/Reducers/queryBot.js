import {
  QUERRY_FAIL,
  QUERRY_START,
  QUERRY_SUCCESS,
  ADD_INTENT,
  VISIBILITY,
} from "../Action/ActionTypes";

const intialQuerryState = {
  msgLog: [],
  error: null,
  isQuerried: false,
  inProgress: false,
  intents: [],
  visibility: false,
};

export default function queryBot(state = intialQuerryState, action) {
  console.log(action);
  switch (action.type) {
    case QUERRY_START:
      return {
        ...state,
        inProgress: true,
      };
    case QUERRY_SUCCESS:
      return {
        ...state,
        isQuerried: true,
        inProgress: false,
        error: null,
        msgLog: [
          ...state.msgLog,
          { request: action.request, response: action.response },
        ],
      };
    case ADD_INTENT:
      return {
        ...state,
        inProgress: false,
        intents: [...state.intents, action.intent],
      };
    case QUERRY_FAIL:
      return {
        ...state,
        isQuerried: false,
        inProgress: false,
        error: action.error,
      };
    case VISIBILITY:
      return {
        ...state,
        visibility: action.visibility,
      };
    default:
      return state;
  }
}

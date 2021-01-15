import * as types from "../types";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

export default function TodoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_TODO_LIST_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case types.GET_TODO_LIST_RECEIVE:
      return Object.assign({}, state, {
        data: action.data.payload,
        loading: action.data.loading,
      });

    case types.UPDATE_TODO_REQUEST:
      return Object.assign({}, state, {
        loading: action.data.loading,
      });

    case types.UPDATE_TODO_RECEIVE:
      return Object.assign({}, state, {
        data: state.data.map((item) => {
          if (item.id === action.data.id) {
            return action.data;
          }
          return item;
        }),
        loading: false,
      });

    case types.DELETE_TODO_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case types.DELETE_TODO_RECEIVE:
      return Object.assign({}, state, {
        data: state.data.filter((x) => x.id !== action.data.id),
        loading: false,
      });

    case types.CREATE_TODO_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case types.CREATE_TODO_RECEIVE:
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
        loading: false,
      });

    case types.SET_TODO_SEARCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });

    case types.SET_TODO_SEARCH_RECEIVE:
      // I tried to implement a solution using Levenshtein string similarity algorithm

      // let items = {};
      // Object.assign(items, state.data);
      // items = items.filter((val) => val.includes(value));

      return Object.assign({}, state, {
        loading: false,
      });
      
    case types.ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.data,
      });
    default:
      return state;
  }
}

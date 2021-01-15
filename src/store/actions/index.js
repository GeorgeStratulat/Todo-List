import * as actions from "./actionCreators";

const apiUrl = "https://jsonplaceholder.typicode.com";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// getting todo list from the given end point
export const getTodoList = (id) => async (dispatch) => {
  dispatch(actions.getTodoListRequest());
  try {
    const res = await fetch(`${apiUrl}/todos?userId=${id}`, {
      method: "GET",
      headers,
    });
    const jsonData = await res.json();
    return dispatch(actions.getTodoListReceive(jsonData));
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message));
  }
};

export const createTodo = (values) => async (dispatch) => {
  dispatch(actions.createTodoRequest());
  if (values.title) {
    return dispatch(actions.createTodoReceive(values));
  } else {
    return dispatch(actions.errorCatcher("Title is required"));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(actions.deleteTodoRequest());
  return dispatch(actions.deleteTodoReceive(id));
};

export const updateTodo = (id, changes) => async (dispatch) => {
  dispatch(actions.updateTodoRequest());
  if (changes.title) {
    return dispatch(actions.updateTodoReceive(changes));
  } else {
    return dispatch(actions.errorCatcher("Update todo title is required"));
  }
};

export const setSearch = (word) => async (dispatch) => {
  console.log("search word", word);
  dispatch(actions.setTodoSearchRequest());
  try {
    return dispatch(actions.setTodoSearchReceive(word));
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message));
  }
};

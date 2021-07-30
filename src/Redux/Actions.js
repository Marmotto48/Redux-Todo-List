import { ADD, EDIT, DELETE, DONE } from "./const";

export const addAct = (newTodo) => {
  return {
    type: ADD,
    payload: newTodo, //input
  };
};
export const deleteAct = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
export const editAct = (id, editText) => {
  return {
    type: EDIT,
    payload: { id, editText },
  };
};
export const doneAct = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

import { ADD, DELETE, DONE, EDIT } from "./const";

const initialState = {
  list: [
    { id: 1, text: "Watch", isDone: false },
    { id: 2, text: "Foooooooood ", isDone: false },
    { id: 3, text: "Read", isDone: false },
    { id: 4, text: "Sleeeeeep", isDone: false },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, list: [...state.list, action.payload] };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.editText }
            : el
        ),
      };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
export default todo;

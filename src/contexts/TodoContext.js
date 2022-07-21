import React, { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext();

const initialItems = [
  "Extract todo state to todo context",
  "Implement todo provider"
];

// Actions
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CLEAR_ALL = "CLEAR_ALL";

// Action creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

// Reducer
export function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    case REMOVE_TODO:
      const copy = [...state];
      copy.splice(action.index, 1);
      return copy;
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

// We wrap the provider in a nice little component
// which will hold the state and provide methods to
// update the state
function TodoProvider(props) {
  // const [items, setItems] = useState(initialItems);
  const [items, dispatch] = useReducer(todoReducer, initialItems);

  // function add(item) {
  //   setItems([...items, item])
  // }

  // function remove(index) {
  //   const copyItems = [...items];
  //   copyItems.splice(index, 1);
  //   setItems(copyItems);
  // }

  const todoData = { items, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />
}

// Here we create a custom hook that allows us to consume
// the todo context
function useTodoContext() {
  return useContext(TodoContext);
}

export { TodoProvider, useTodoContext };
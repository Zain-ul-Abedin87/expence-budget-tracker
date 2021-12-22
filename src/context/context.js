import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenceTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transcation, dispatch] = useReducer(contextReducer, initialState);

  const deleteTranscation = (id) => {
    dispatch({ type: "DELETE_TRANSCTION", payload: id });
    // console.log(id)
  };
  const addTranscation = (transcation) => {
    dispatch({ type: "ADD_TRANSCTION", payload: transcation });
  };
  console.log(transcation);
  return (
    <ExpenceTrackerContext.Provider
      value={{
        deleteTranscation,
        addTranscation,
        transcation,
      }}
    >
      {children}
    </ExpenceTrackerContext.Provider>
  );
};

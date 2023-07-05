import React, { createContext, useContext, useReducer } from "react";
// prepares the dataLayer
// create the context
export const StateContext = createContext();
// create the provider
// wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create the hook to access the context
//push and pul information from the data layer
export const useStateValue = () => useContext(StateContext);

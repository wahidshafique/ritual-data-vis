// src/count-context.js
import React from "react";
//import tester from "./datajs";
const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

function AppReducer(state, action) {
  switch (action.type) {
    case "setRitualData": {
      return { ritualData: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(AppReducer, {
    ritualData: null
  });
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a App Provider");
  }
  return context;
}
function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}
export { AppProvider, useAppState, useAppDispatch };

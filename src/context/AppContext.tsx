import React, { Dispatch, createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { Action, AppState } from "./types";

export interface AppContextType {
  state: AppState;
  dispatch: Dispatch<Action>;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

import react, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20, date: Date(2022, 0, 0) },
    { id: 2, text: "Salary", amount: 300, date: Date(2022, 0, 0) },
    { id: 3, text: "Book", amount: -10, date: Date(2022, 0, 1) },
    { id: 4, text: "Bootycall", amount: 150, date: Date(2022, 0, 1) },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

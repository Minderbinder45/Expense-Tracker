import React, { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Customer Balance</h4>
      <h2>{total}</h2>
    </>
  );
};

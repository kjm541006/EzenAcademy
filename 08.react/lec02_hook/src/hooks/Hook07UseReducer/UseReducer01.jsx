import React, { useReducer, useState } from "react";

const ACTION_TYPES = {
  deposit: "DEPOSIT",
  withdraw: "WITHDRAW",
};

const reducer = (state, action) => {
  console.log(`reducer가 실행됩니다.`, state, action);

  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer01 = () => {
  const [balance, setBalance] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>Reducer은행에 오신 것을 환영</h2>
      <p>잔액 : {money}</p>
      <input type="number" value={balance} onChange={(e) => setBalance(parseInt(e.target.value))} step="1000" />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: balance });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: balance });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default UseReducer01;

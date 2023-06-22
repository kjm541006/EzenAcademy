import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>1씩 증가하기</button>
        <button onClick={onDecrease}>1씩 감소하기</button>
      </div>
    </div>
  );
};

export default Counter;

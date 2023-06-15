import React, { useRef } from "react";
import { useState } from "react";

const UseRef01 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(`${count} 상태가 변경될 떄마다 렌더링`);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>CountRef: {countRef.current}</p>
      <button onClick={increaseCount}>더하기</button>
      <button onClick={increaseCountRef}>더하기ref</button>
    </div>
  );
};

export default UseRef01;

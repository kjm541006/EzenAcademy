import React, { useRef } from "react";

const UseRef02 = () => {
  const countRef = useRef(0);
  let countVar = 0;

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`countRef.current = ${countRef.current}`);
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log(`countVar = ${countVar}`);
  };

  const doRendering = () => {};

  return (
    <div>
      <p>countRef : {countRef.currnet}</p>
      <p>countVar: {countVar}</p>
      <button onClick={increaseCountRef}>Ref더하기</button>
      <button onClick={increaseCountVar}>Var 더하기</button>
      <button onClick={doRendering}></button>
    </div>
  );
};

export default UseRef02;

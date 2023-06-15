import React from "react";
import { useState, useEffect } from "react";

const UseEffect01 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("엄청 무거운 작업");
  });
  useEffect(() => {
    console.log("엄청 무거운 작업 (마운트될때 실행)");
  }, []);

  useEffect(() => {
    console.log("==> count의 상태가 변경될 때마다 실행");
  }, [count]);

  useEffect(() => {
    console.log("==> naame의 상태가 변경될 때마다 실행");
  }, [name]);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <button onClick={onIncrease}>증가</button>
      <span>count: {count}</span>
      <input type="text" onClick={changeName} />
      <p>이름 : {name}</p>
    </div>
  );
};

export default UseEffect01;

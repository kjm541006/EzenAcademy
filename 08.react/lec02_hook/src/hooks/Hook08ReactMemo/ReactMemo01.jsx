import React, { useState } from "react";
import Child1 from "../../components/Child1";

const ReactMemo01 = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const increaseParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const increaseChildAge = () => {
    setChildAge(childAge + 1);
  };

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge} 살</p>
      <button onClick={increaseParentAge}>부모 나이 증가</button>
      <button onClick={increaseChildAge}>자녀 나이 증가</button>
      <Child1 name={"홍길동"} age={childAge} />
    </div>
  );
};

export default ReactMemo01;

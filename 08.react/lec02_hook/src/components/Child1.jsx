import React, { memo } from "react";

const Child1 = ({ name, age }) => {
  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h3>자녀</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
};

export default memo(Child1);

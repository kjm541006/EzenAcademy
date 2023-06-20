import React, { useMemo, useState } from "react";
import Child2 from "../../components/Child2.jsx";

const ReactMemo01 = () => {
  const [parentAge, setParentAge] = useState(0);

  console.log("부모 컴포넌트가 렌더링 되었습니다.");

  const increaseParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const name = useMemo(() => {
    return {
      lastname: "홍",
      firstname: "길동",
    };
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge} 살</p>
      <button onClick={increaseParentAge}>부모 나이 증가</button>
      <Child2 name={name} />
    </div>
  );
};

export default ReactMemo01;

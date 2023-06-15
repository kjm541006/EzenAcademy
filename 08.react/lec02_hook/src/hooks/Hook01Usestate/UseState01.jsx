import React from "react";
import { useState } from "react";

const UseState01 = () => {
  const [time, setTime] = useState(10);

  const changeTime = () => {
    let newTime;
    if (time > 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  return (
    <div>
      <h1>현재시간 : {time}시</h1>
      <button onClick={changeTime}>현재시간은?</button>
    </div>
  );
};

export default UseState01;

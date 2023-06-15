import React from "react";
import { useState } from "react";

const UseState02 = () => {
  const [now, setNow] = useState("yyyy:mm:dd hh:mm:ss");
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const handleTimeClick = () => {
    const time = new Date();

    setNow(time.toLocaleDateString() + " " + time.toLocaleTimeString);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleAddClick = (e) => {
    setUsers([input, ...users]);
  };

  return (
    <div>
      <h3>현재시간 : {now}</h3>
      <button className="btn btn-primary" onClick={handleTimeClick}>
        새로고침
      </button>

      <hr />
      <input type="text" name="userName" onChange={handleOnChange} value={input} />
      <button className="btn btn-success" onClick={handleAddClick}>
        추가
      </button>
      <hr />
      {users.map((user, idx) => {
        return (
          <p key={idx}>
            {idx} : {user}
          </p>
        );
      })}
    </div>
  );
};

export default UseState02;

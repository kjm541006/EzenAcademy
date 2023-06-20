import React, { useState } from "react";

const CustomHook01 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h1>useInput(Custom Hook)</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      {/* <input type="text" value={inputValue} onChange={handleChange} /> */}
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default CustomHook01;

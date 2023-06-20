import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/UserContext";
import Page from "../../pages/Page";

const UseContext02 = () => {
  const [isDark, setIsDark] = useState(false);

  const data = useContext(ThemeContext);
  console.log(`data: ${data}`);

  return (
    <div>
      <UserContext.Provider value={"홍길동"}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContext02;

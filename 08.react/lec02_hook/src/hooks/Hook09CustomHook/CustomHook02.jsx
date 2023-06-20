import React, { useEffect, useState } from "react";

const CustomHook02 = () => {
  const [data, setData] = useState("");

  const fetchUrl = (type) => {
    fetch("https://jsonplaceholder.typicode.com/" + type)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetchUrl("users");
  }, []);

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CustomHook02;

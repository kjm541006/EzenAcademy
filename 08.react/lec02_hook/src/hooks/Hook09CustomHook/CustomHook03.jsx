import React from "react";
import useFetch from "../../customhooks/useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com/";
const CustomHook03 = () => {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts/1");
  const { data: todoData } = useFetch(baseUrl, "todos");
  return (
    <div>
      <h1>useFetch(Cusom Hook)</h1>
      <h3>Users</h3>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h3>Posts</h3>
      {postData && <pre>{JSON.stringify(postData, null, 2)}</pre>}
      <h3>Todos</h3>
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
    </div>
  );
};

export default CustomHook03;

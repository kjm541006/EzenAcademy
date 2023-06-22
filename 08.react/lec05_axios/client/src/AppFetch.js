import React, { useEffect, useState } from "react";

const AppFetch = () => {
  const [todoList, setTodoList] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:4000/api/todo")
      .then((res) => res.json())
      .then((res) => setTodoList(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.value;
    fetch("http://localhost:4000/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, done }),
    }).then(fetchData());
    e.target.value = "";
    e.target.done.checked = false;
    e.target.text.focus();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="text " />
        <input type="checkbox" name="done " />
        <input type="submit" value="추가" />
      </form>
      <hr />
      <table border={"1"}>
        <tr>
          <th>id</th>
          <th>text</th>
          <th>done</th>
        </tr>
        {todoList?.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.done ? "done!!" : "not yet!"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AppFetch;

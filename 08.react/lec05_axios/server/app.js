const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors("localhost:3000"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 2;
const todoList = [{ id: 1, text: `오늘의 할일 1`, done: false }];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/todos", (req, res) => {
  res.send("Todos..........");
});

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({ id: id++, text, done });
  return res.send("오늘의 할일 포스트 등록성공");
});

app.listen(4000, () => {
  console.log("Server Start!!!");
});

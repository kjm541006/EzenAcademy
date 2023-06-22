import "./App.css";
import { useEffect, useState } from "react";
import { call } from "./service/AppService";

function App() {
  const [items, setItems] = useState([{ id: "0", title: "새글 등록하기" }]);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => setItems(response.data));
  }, []);

  const addItem = () => {};

  const editItem = () => {};

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      {items.map((item) => (
        <Todo Item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
      ))}
    </Paper>
  );

  return (
    <div className="App">
      <Container>
        <AddTodo addItem={addItem} editItem={editItem}></AddTodo>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;

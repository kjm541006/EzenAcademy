import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;

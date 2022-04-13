import "./App.css";

// import Counter from "./component/counter/Counter";
import ToDoApp from "./component/todo/ToDoApp";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}

      <ToDoApp />
    </div>
  );
}

export default App;
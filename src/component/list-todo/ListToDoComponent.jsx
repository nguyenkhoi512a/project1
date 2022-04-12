import React, { useState } from "react";

const ListToDoComponent = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Learn to React",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 2,
      description: "Learn to PMG",
      done: false,
      targetDate: new Date(),
    },
    {
      id: 3,
      description: "N3",
      done: false,
      targetDate: new Date(),
    },
  ]);
  return (
    <div>
      <h1>List Todos</h1>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Target Date</th>
            <th>Is Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>{todo.done.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListToDoComponent;

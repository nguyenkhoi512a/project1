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
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToDoComponent;

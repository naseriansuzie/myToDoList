import React from "react";
import ToDoList from "./ToDoList";

const ToDos = () => (
  <div>
    <div>
      <input placeholder="here"></input>
      <button>+</button>
    </div>
    <div>
      <ToDoList />
    </div>
  </div>
);

export default ToDos;

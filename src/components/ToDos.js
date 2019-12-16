import React from "react";
import ToDoList from "./ToDoList";

const ToDos = props => (
  <div>
    <div>
      <div>{props.chosenGroup}</div>
      <button onClick={props.createToDoHandle}>+</button>
    </div>
    <div>
      <ToDoList
        toDos={props.toDos}
        searchVal={props.searchVal}
        checkToDoHandle={props.checkToDoHandle}
        writeToDoHandle={props.writeToDoHandle}
        controlToDoHandle={props.controlToDoHandle}
      />
    </div>
  </div>
);

export default ToDos;

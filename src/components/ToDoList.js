import React from "react";
import ToDoListEntry from "./ToDoListEntry";

const ToDoList = props => {
  let toDos;
  if (props.searchVal !== "") {
    const filterdToDos = props.toDos.filter(toDo =>
      toDo.description.include(props.searchVal)
    );
    toDos = filterdToDos;
  } else {
    toDos = props.toDos;
  }
  return (
    props.toDos && (
      <div>
        {toDos.map(todo => (
          <ToDoListEntry
            key={todo.id}
            id={"toDo-" + todo.id}
            isDone={todo.isDone}
            description={todo.description}
            checkToDoHandle={props.checkToDoHandle}
            writeToDoHandle={props.writeToDoHandle}
            controlToDoHandle={props.controlToDoHandle}
          />
        ))}
      </div>
    )
  );
};

export default ToDoList;

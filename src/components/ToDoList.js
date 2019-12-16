import React from "react";
import ToDoListEntry from "./ToDoListEntry";

const ToDoList = props => {
  let toDos;
  const filterToDos = func => {
    return props.toDos.filter(func);
  };
  if (props.searchVal !== "") {
    toDos = filterToDos(toDo => toDo.description.include(props.searchVal));
  } else if (props.toDos !== null) {
    if (props.chosenGroup === "완료한 리스트") {
      toDos = filterToDos(toDo => toDo.isDone === true);
      console.log(toDos);
    } else {
      toDos = filterToDos(toDo => toDo.groupTitle === props.chosenGroup);
    }
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

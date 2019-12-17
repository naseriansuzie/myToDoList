import React from "react";
import ToDoListEntry from "./ToDoListEntry";

const ToDoList = props => {
  const toDosToShow = list => {
    const filterToDos = func => {
      return list.filter(func);
    };

    let toDos;
    if (list) {
      if (props.chosenGroup === "완료한 리스트") {
        toDos = filterToDos(toDo => toDo.isDone === true);
      } else if (props.searchVal) {
        toDos = filterToDos(toDo => toDo.description.includes(props.searchVal));
      } else {
        toDos = filterToDos(toDo => toDo.groupTitle === props.chosenGroup);
      }
    }
    return toDos;
  };
  const filteredToDos = toDosToShow(props.toDos);

  return (
    props.toDos && (
      <div>
        {filteredToDos.map(todo => (
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

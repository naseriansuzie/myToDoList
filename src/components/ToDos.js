import React from "react";
import ToDoList from "./ToDoList";

const ToDos = props => {
  let style = { color: "#" + parseInt(Math.random() * 0xffffff).toString(16) };
  return (
    <div>
      <div className="row btn-area font-size">
        <div style={style}>{props.chosenGroup}</div>
        <div>
          <button id="to-do-btn" onClick={props.createToDoHandle}>
            +
          </button>
        </div>
      </div>
      <div>
        <ToDoList
          toDos={props.toDos}
          chosenGroup={props.chosenGroup}
          searchVal={props.searchVal}
          checkToDoHandle={props.checkToDoHandle}
          writeToDoHandle={props.writeToDoHandle}
          controlToDoHandle={props.controlToDoHandle}
        />
      </div>
    </div>
  );
};

export default ToDos;

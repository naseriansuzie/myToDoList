import React from "react";

const ToDoListEntry = props => {
  return (
    <div>
      <input
        type="checkbox"
        className="cb1"
        id={"bx-" + props.id}
        onClick={props.checkToDoHandle}
      />
      <label htmlFor="cb1"></label>
      <input
        type="text"
        value={props.description}
        id={props.id}
        onChange={props.writeToDoHandle}
        onKeyUp={props.controlToDoHandle}
      />
    </div>
  );
};

export default ToDoListEntry;

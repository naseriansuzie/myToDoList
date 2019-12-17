import React from "react";

const ToDoListEntry = props => {
  return (
    <div className="row">
      <div>
        <input
          type="checkbox"
          className="cb"
          id={"bx-" + props.id}
          onClick={props.checkToDoHandle}
        />
        <label htmlFor="cb"></label>
      </div>
      <input
        type="text"
        className="margin"
        value={props.description}
        id={props.id}
        onChange={props.writeToDoHandle}
        onKeyUp={props.controlToDoHandle}
      />
    </div>
  );
};

export default ToDoListEntry;

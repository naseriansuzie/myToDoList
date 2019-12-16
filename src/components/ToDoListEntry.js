import React from "react";

const ToDoListEntry = props => {
  return (
    <div>
      <input type="checkbox" className="cb1" onClick={props.checkToDoHandle} />
      <label htmlFor="cb1"></label>
      <input
        type="text"
        id={props.id}
        value={props.description}
        onChange={props.writeToDoHandle}
        onKeyUp={props.controlToDoHandle}
      />
    </div>
  );
};

export default ToDoListEntry;

import React from "react";

const GroupListEntry = props => (
  <div>
    <input
      className="input-box"
      type="text"
      id={"gr-" + props.id}
      value={props.title}
      onChange={props.changeGroupNameHandle}
      onClick={props.selectGroupHandle}
    />
  </div>
);

export default GroupListEntry;

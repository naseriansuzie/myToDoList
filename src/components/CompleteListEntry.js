import React from "react";

const CompleteListEntry = props => {
  return <div onClick={props.viewDoneHandle}>예정됨</div>;
};

export default CompleteListEntry;

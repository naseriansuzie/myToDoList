import React from "react";
import GroupListEntry from "./GroupListEntry";
import CompleteListEntry from "./CompleteListEntry";

const GroupList = props => {
  if (props.groupTitles === null) {
    return (
      <div>
        <CompleteListEntry viewDoneHanlder={props.viewDoneHanlder} />
      </div>
    );
  } else
    return (
      <div>
        <div>
          <CompleteListEntry viewDoneHanlder={props.viewDoneHanlder} />
        </div>
        <div>
          {props.groupTitles.map(titleSet => (
            <GroupListEntry key={titleSet.id} title={titleSet.title} />
          ))}
        </div>
      </div>
    );
};
export default GroupList;

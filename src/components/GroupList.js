import React from "react";
import GroupListEntry from "./GroupListEntry";
import CompleteListEntry from "./CompleteListEntry";

const GroupList = props => {
  if (props.groupTitles === null) {
    return (
      <div className="filter-area">
        <CompleteListEntry viewDoneHandle={props.viewDoneHandle} />
      </div>
    );
  } else
    return (
      <div>
        <div className="filter-area">
          <CompleteListEntry viewDoneHandle={props.viewDoneHandle} />
        </div>
        <div>
          {props.groupTitles.map(titleSet => (
            <GroupListEntry
              key={titleSet.id}
              id={titleSet.id}
              title={titleSet.title}
              selectGroupHandle={props.selectGroupHandle}
              changeGroupNameHandle={props.changeGroupNameHandle}
            />
          ))}
        </div>
      </div>
    );
};
export default GroupList;

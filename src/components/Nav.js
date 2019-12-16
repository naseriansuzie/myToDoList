import React from "react";
import Search from "./Search";
import GroupList from "./GroupList";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = { groupTitles: null };
    this.addGroupTitles = this.addGroupTitles.bind(this);
    this.createGroupHandler = this.createGroupHandler.bind(this);
  }

  // group 제목 추가 시
  addGroupTitles(id) {
    const newGroup = { id: id, title: "새로운 목록" + id };
    if (this.state.groupTitles !== null) {
      this.setState({ groupTitles: [...this.state.groupTitles, newGroup] });
    } else {
      this.setState({ groupTitles: [newGroup] });
    }
  }

  // group 생성 버튼 클릭 시
  createGroupHandler() {
    const titles = this.state.groupTitles;
    let id = titles !== null ? titles[titles.length - 1].id + 1 : 1;
    this.addGroupTitles(id);
    let lastTitle = "새로운 목록" + id;
    this.props.updateChosenGroup(lastTitle);
  }

  render() {
    return (
      <div>
        <div>
          <Search searchVal={this.props.searchVal} />
        </div>
        <div>
          <GroupList
            groupTitles={this.state.groupTitles}
            chosenGroup={this.props.chosenGroup}
            viewDoneHanlder={this.props.viewDoneHanlder}
          />
        </div>
        <div>
          <button onClick={this.createGroupHandler}>+</button>
        </div>
      </div>
    );
  }
}

export default Nav;

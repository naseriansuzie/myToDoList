import React from "react";
import Search from "./Search";
import GroupList from "./GroupList";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = { groupTitles: null };
    this.addGroupTitles = this.addGroupTitles.bind(this);
    this.createGroupHandle = this.createGroupHandle.bind(this);
    this.changeGroupNameHandle = this.changeGroupNameHandle.bind(this);
  }

  // group명 추가 시
  addGroupTitles(id) {
    const newGroup = { id: id, title: "새로운 목록" + id };
    if (this.state.groupTitles !== null) {
      this.setState({ groupTitles: [...this.state.groupTitles, newGroup] });
    } else {
      this.setState({ groupTitles: [newGroup] });
    }
  }

  // group 생성 버튼 클릭 시
  createGroupHandle() {
    const titles = this.state.groupTitles;
    let id = titles !== null ? titles[titles.length - 1].id + 1 : 1;
    this.addGroupTitles(id);
    let lastTitle = "새로운 목록" + id;
    this.props.updateChosenGroup(lastTitle);
  }

  // group명 변경 시
  changeGroupNameHandle(event) {
    let inputVal = event.target.value;
    let id = Number(event.target.id.slice(3));
    const newGroup = this.state.groupTitles.map(titleSet => {
      if (id === titleSet.id) {
        titleSet.title = inputVal;
      }
      return titleSet;
    });
    this.setState({ groupTitles: newGroup });
    //여기서부터 기능 뜯기
    let newTitleSet;
    this.state.groupTitles.forEach(titleSet => {
      if (titleSet.id === id) {
        newTitleSet = titleSet;
      }
    });
    this.props.updateChosenGroup(newTitleSet.title);
    //app state toDo의 같은 이름 찾아서 바꿔주기 기능 필요
  }

  render() {
    return (
      <div className="section">
        <div className="col search-area">
          <div className="row">
            <i class="fa fa-search"></i>
            <Search
              id="search-bar"
              searchVal={this.props.searchVal}
              searchHandle={this.props.searchHandle}
            />
          </div>
          <div>
            <GroupList
              groupTitles={this.state.groupTitles}
              chosenGroup={this.props.chosenGroup}
              viewDoneHandle={this.props.viewDoneHandle}
              selectGroupHandle={this.props.selectGroupHandle}
              changeGroupNameHandle={this.changeGroupNameHandle}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <button id="create-btn" onClick={this.createGroupHandle}>
              +
            </button>
          </div>
          <div>목록 추가</div>
        </div>
      </div>
    );
  }
}

export default Nav;

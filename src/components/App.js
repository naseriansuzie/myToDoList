import React from "react";

import Nav from "./Nav";
import ToDos from "./ToDos";

import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenGroup: "예정됨",
      toDos: null,
      searchVal: "",
      isDone: null
    };
    this.searchHandle = this.searchHandle.bind(this);
    this.viewDoneHandle = this.viewDoneHandle.bind(this);
    this.selectGroupHandle = this.selectGroupHandle.bind(this);

    this.createToDoHandle = this.createToDoHandle.bind(this);
    this.checkToDoHandle = this.checkToDoHandle.bind(this);
    this.writeToDoHandle = this.writeToDoHandle.bind(this);
    this.controlToDoHandle = this.controlToDoHandle.bind(this);

    this.updateChosenGroup = this.updateChosenGroup.bind(this);
    this.filterToDos = this.filterToDos.bind(this);
  }

  // 검색어 입력 시
  searchHandle(event) {
    let inputVal = event.target.value;
    this.setState({ searchVal: inputVal });
    if (inputVal === "") {
      this.setState({ chosenGroup: "예정됨" });
    } else {
      this.setState({ chosenGroup: inputVal + "에 대한 검색 결과" });
    }
  }

  // 완료된 리스트 클릭 시
  viewDoneHandle() {
    this.state.chosenGroup === "완료한 리스트"
      ? this.setState({ chosenGroup: "예정됨" })
      : this.setState({ chosenGroup: "완료한 리스트" });
  }

  // 그룹 타이틀 클릭 시
  selectGroupHandle(event) {
    let selected = event.target.value;
    this.setState({ chosenGroup: selected });
  }

  // to-do 만들기 버튼 클릭 시
  createToDoHandle() {
    if (this.state.toDos) {
      const toDos = this.state.toDos;
      let id = toDos[toDos.length - 1].id + 1;
      this.setState({
        toDos: [
          ...this.state.toDos,
          {
            id: id,
            date: new Date(),
            groupTitle: this.state.chosenGroup,
            description: "",
            isDone: false
          }
        ]
      });
    } else if (this.state.chosenGroup === "예정됨") {
      alert("please choose to-do group first");
    } else {
      this.setState({
        toDos: [
          {
            id: 1,
            date: new Date(),
            groupTitle: this.state.chosenGroup,
            description: "",
            isDone: false
          }
        ]
      });
    }
  }

  // to-do 완료 유무 체크 시
  checkToDoHandle(event) {
    const id = Number(event.target.id.slice(8));
    const newArr = this.state.toDos.map(toDo => {
      if (id === toDo.id) {
        toDo.isDone = !toDo.isDone;
      }
      return toDo;
    });
    this.setState({ toDos: newArr });
  }

  // 신규 to-do 내용 작성 시
  writeToDoHandle(event) {
    const inputVal = event.target.value;
    const id = Number(event.target.id.slice(5));
    const newToDos = this.state.toDos.map(toDo => {
      if (id === toDo.id) {
        toDo.description = inputVal;
      }
      return toDo;
    });
    this.setState({ toDos: newToDos });
  }

  // 신규 to-do 내용 등록 or 취소 시
  controlToDoHandle(event) {
    if (event.keyCode === 13) {
      this.createToDoHandle();
      //const currentId = event.target.id;
      //const nextId = currentId.slice(0, 5) + (Number(currentId.slice(5)) + 1);
    }
    if (event.keyCode === 27) {
      const id = Number(event.target.id.slice(5));
      const newToDos = this.filterToDos(
        this.state.toDos,
        toDo => id !== toDo.id && toDo
      );
      this.setState({ toDos: newToDos });
    }
  }

  // 현재 선택된 group 업데이트 시
  updateChosenGroup(title) {
    this.setState({ chosenGroup: title });
  }

  // to-do 필터 함수
  filterToDos(location, func) {
    return location.filter(func);
  }

  render() {
    return (
      <div className="app">
        <div className="content-box">
          <div className="side"></div>
          <div id="contents">
            <div className="nav">
              <Nav
                chosenGroup={this.state.chosenGroup}
                searchVal={this.state.searchVal}
                updateChosenGroup={this.updateChosenGroup}
                viewDoneHandle={this.viewDoneHandle}
                searchHandle={this.searchHandle}
                selectGroupHandle={this.selectGroupHandle}
              />
            </div>
            <div className="to-dos">
              <ToDos
                toDos={this.state.toDos}
                chosenGroup={this.state.chosenGroup}
                searchVal={this.state.searchVal}
                createToDoHandle={this.createToDoHandle}
                checkToDoHandle={this.checkToDoHandle}
                writeToDoHandle={this.writeToDoHandle}
                controlToDoHandle={this.controlToDoHandle}
              />
            </div>
          </div>
          <div className="side"></div>
        </div>
      </div>
    );
  }
}

export default App;

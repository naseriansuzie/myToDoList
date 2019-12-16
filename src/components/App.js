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
    this.createToDoHandle = this.createToDoHandle.bind(this);
    this.checkToDoHandle = this.checkToDoHandle.bind(this);
    this.writeToDoHandle = this.writeToDoHandle.bind(this);
    this.controlToDoHandle = this.controlToDoHandle.bind(this);
    this.viewDoneHanlder = this.viewDoneHanlder.bind(this);

    this.updateChosenGroup = this.updateChosenGroup.bind(this);

    this.filterToDos = this.filterToDos.bind(this);
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
    const id = event.target.id.slice(5);
    const newToDos = this.state.toDos.map(toDo => {
      if (Number(id) === toDo.id) {
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
  viewDoneHanlder() {
    this.state.chosenGroup === "완료한 리스트"
      ? this.setState({ chosenGroup: "예정됨" })
      : this.setState({ chosenGroup: "완료한 리스트" });
  }
  // 현재 선택된 group 업데이트 시
  updateChosenGroup(title) {
    this.setState({ chosenGroup: title });
  }

  // 범용으로 쓰이는 to-do 필터 함수
  filterToDos(location, func) {
    return location.filter(func);
  }

  render() {
    return (
      <div className="app">
        <div>
          <div id="contents">
            <div className="col-md-3">
              <Nav
                chosenGroup={this.state.chosenGroup}
                searchVal={this.state.searchVal}
                updateChosenGroup={this.updateChosenGroup}
                viewDoneHanlder={this.viewDoneHanlder}
              />
            </div>
            <div className="col-md-9">
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
        </div>
      </div>
    );
  }
}

export default App;

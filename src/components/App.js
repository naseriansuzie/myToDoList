import React from "react";

import Nav from "./Nav";
import ToDos from "./ToDos";

import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenGroup: "예정됨",
      // toDos: null,
      toDos: [
        {
          id: 0,
          date: new Date(),
          groupTitle: "예정됨",
          isDone: false,
          description: ""
        }
      ],
      groupTitles: ["그룹1", "그룹2"],
      searchVal: ""
    };
    this.createToDoHandle = this.createToDoHandle.bind(this);
    this.checkToDoHandle = this.checkToDoHandle.bind(this);
    this.writeToDoHandle = this.writeToDoHandle.bind(this);
    this.filterToDos = this.filterToDos.bind(this);
    this.controlToDoHandle = this.controlToDoHandle.bind(this);
  }
  createToDoHandle() {
    if (this.state.toDos) {
      const toDos = this.state.toDos;
      let id = toDos[toDos.length - 1].id + 1 || 0;
      this.setState({
        toDos: [
          ...this.state.toDos,
          {
            id: id,
            date: new Date(),
            groupTitle: this.state.chosenGroup,
            description: ""
          }
        ]
      });
    } else {
      alert("please create to-do group first");
    }
  }

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

  filterToDos(id) {
    const newToDos = this.state.toDos.filter(toDo => id !== toDo.id && toDo);
    this.setState({ toDos: newToDos });
  }
  controlToDoHandle(event) {
    if (event.keyCode === 13) {
      this.createToDoHandle();
      //const currentId = event.target.id;
      //const nextId = currentId.slice(0, 5) + (Number(currentId.slice(5)) + 1);
    }
    if (event.keyCode === 27) {
      const id = Number(event.target.id.slice(5));
      this.filterToDos(id);
    }
  }

  checkToDoHandle(event) {
    const id = Number(event.target.id.slice(5));
    const newArr = this.state.toDos.map(toDo => {
      if (id === toDo.id) {
        toDo.isDone = !toDo.isDone;
        console.log(toDo.isDone);
      }
      return toDo;
    });
    this.setState({ toDos: newArr });
  }

  render() {
    return (
      <div className="app">
        <div>
          <div id="contents">
            <div className="col-md-3">
              <Nav />
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

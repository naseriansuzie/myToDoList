import React from "react";

import Nav from "./Nav";
import ToDos from "./ToDos";

import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: null,
      groupTitles: null,
      searchVal: ""
    };
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
              <ToDos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

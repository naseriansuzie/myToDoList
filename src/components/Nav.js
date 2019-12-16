import React from "react";
import Search from "./Search";
import GroupList from "./GroupList";

const Nav = () => (
  <div>
    <div>
      <Search />
    </div>
    <div>
      <GroupList />
    </div>
    <div>
      <button>+</button>
    </div>
  </div>
);

export default Nav;

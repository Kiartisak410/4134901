import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import Brand from "./components/Ul";
import DataTable from "./components/Table";

ReactDOM.render(
  <>
    <DataTable />
    <Car age="21" eye="black" />
    <List />
    <Brand />
  </>,
  document.getElementById("root")
);

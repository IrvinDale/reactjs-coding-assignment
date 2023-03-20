import React from "react";
import {
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "../screens/Home";


export default function Routes() {

  return (
      <Switch>
        <Route path="/" element={<Home/>} />
      </Switch>
  );
}

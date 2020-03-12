import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import { urls } from "../utils/constants";
import ListContainer from "./Car/ListContainer";
import New from "./Car/New";

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={urls.car.new} component={New} />
          <Route component={ListContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/login";
import PrivateRoute from "./components/privateRouter";
import HomePage from "./containers/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/login" exact component={LoginPage}></Route>
            <PrivateRoute path="/" component={HomePage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;

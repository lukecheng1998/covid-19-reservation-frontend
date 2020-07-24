import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//import theme file
import "./App.css";
import login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import user from "./pages/user";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/" component={home} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/user" component={user} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

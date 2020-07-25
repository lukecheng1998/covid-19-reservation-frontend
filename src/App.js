import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
//import theme file
import "./App.css";
import login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import user from "./pages/user";
import axios from "axios";
import store from "./redux/store";
import Navbar from "./components/layout/Navbar"
const theme = createMuiTheme(themeFile);
axios.defaults.baseURL =
  "https://us-central1-reservation-system-4bf4a.cloudfunctions.net/api";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/login" component={login} />
              <Route exact path="/" component={home} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/user" component={user} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

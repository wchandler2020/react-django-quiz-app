import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CookiesProvider, withCookies } from "react-cookie";

import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import QuestionList from "./components/questions/QuestionList";
import About from "./components/about/About";
import Categories from "./components/categories/Categories";
import Registration from "./components/registration/Registration";
import TextEditor from "./components/editor/TextEditor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CookiesProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/questions" component={QuestionList} />
              <Route path="/about" component={About} />
              <Route path="/categories" component={Categories} />
              <Route path="/registration" component={Registration} />
              <Route path="/texteditor" component={TextEditor} />
            </Switch>
          </CookiesProvider>
        </Router>
      </div>
    );
  }
}

export default withCookies(App);

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import QuestionList from "./components/questions/QuestionList";
import About from "./components/about/About";
class App extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/questions/", {
      method: "GET",
      headers: {
        Authorization: "Token 1754ad345f5e638210387595721b2ed9fe6667df",
      },
    })
      .then((resp) => resp.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/questions" component={QuestionList} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

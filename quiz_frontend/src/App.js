import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/questions/", {
      method: "GET",
      headers: {
        Authorization: "Token 1754ad345f5e638210387595721b2ed9fe6667df",
      },
    })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;

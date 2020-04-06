import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    let newCredentials = this.state.credentials;
    newCredentials[e.target.name] = e.target.value;
    this.setState({ credentials: newCredentials });
  };

  handleLogin = (e) => {
    console.log(this.state.credentials);
    fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res.token);
        window.location.href = "/questions";
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { password, username } = this.state.credentials;
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Agatha Quiztie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/questions">
                  Quiz Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-3"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <input
                className="form-control mr-sm-3"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this.handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </nav>
      </Fragment>
    );
  }
}

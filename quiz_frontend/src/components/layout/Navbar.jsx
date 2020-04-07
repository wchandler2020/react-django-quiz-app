import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
class Navbar extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    isLoggedIn: false,
  };

  handleChange = (e) => {
    let newCredentials = this.state.credentials;
    newCredentials[e.target.name] = e.target.value;
    this.setState({ credentials: newCredentials });
  };

  // handleLoginNavbar = (isLoggedIn) => {
  //   const newLogin = isLoggedIn;
  //   this.setState((state) => {
  //     if (state.isLoggedIn === newLogin) {
  //       return null;
  //     } else {
  //       return { isLoggedIn };
  //     }
  //   });
  // };

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
        if (res.token) {
          this.props.cookies.set("quiz-token", res.token);
          window.location.href = "/categories";
          this.setState({ isLoggedIn: true });
          console.log(this.state.isLoggedIn);
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { password, username } = this.state.credentials;
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
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
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/questions">
                  Quiz Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/texteditor">
                  Practice Code
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
                style={{ display: this.state.isLoggedIn ? "none" : "block" }}
              />
              <input
                className="form-control mr-sm-3"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
                style={{ display: this.state.isLoggedIn ? "none" : "block" }}
              />
              <button
                type="button"
                className="btn btn-outline-success my-2 my-sm-0 login-btn"
                onClick={this.handleLogin}
                style={{ border: "#009688 !important" }}
              >
                {this.state.isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </form>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withCookies(Navbar);

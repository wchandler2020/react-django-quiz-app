import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Registration extends Component {
  state = {
    registration: {
      username: "",
      password: "",
      confirmPassword: "",
      confirmAlert: false,
    },
  };

  changeHandler = (e) => {
    const newRegistration = this.state.registration;
    newRegistration[e.target.name] = e.target.value;
    this.setState({ registration: newRegistration });
  };

  clickHandler = () => {
    if (
      this.state.registration.password ===
      this.state.registration.confirmPassword
    ) {
      fetch(`${process.env.REACT_APP_API_URL}/api/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.registration),
      })
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res.token);
          window.location.href = "/";
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("The password and confirm do not match, please try again.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 8000,
      });
    }
  };

  const;

  render() {
    const { username, password, confirmPassword } = this.state;
    toast.configure();
    return (
      <Fragment>
        <div className="container">
          <form className="reg-form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Choose a Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="username"
                placeholder="Enter a Username"
                name="username"
                value={username}
                onChange={this.changeHandler}
              />
              <small id="emailHelp" className="form-text text-muted">
                Your username can be anything your want, have fun!
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                name="password"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Confirm Your Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.changeHandler}
              />
            </div>

            <button
              type="button"
              className="btn btn-outline-success reg-btn"
              onClick={this.clickHandler}
            >
              Register
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Registration;

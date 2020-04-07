import React, { Component, Fragment } from "react";
import "./question.css";
import { withCookies } from "react-cookie";

class QuestionList extends Component {
  state = {
    content: [],
    token: this.props.cookies.get("quiz-token"),
  };
  componentDidMount() {
    if (this.state.token) {
      fetch("http://127.0.0.1:8000/api/questions/", {
        method: "GET",
        headers: {
          Authorization: `Token ${this.state.token}`,
        },
      })
        .then((resp) => resp.json())
        .then((res) => this.setState({ content: res }))
        .catch((error) => console.log(error));
    } else {
      window.location.href = "/";
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.content.map((info) => {
          return (
            <div className="card middle" key={info.id}>
              <div className="front">
                <div className="container">
                  <h3 className="question">
                    {" "}
                    <strong>{info.question}</strong>{" "}
                  </h3>
                </div>
              </div>
              <div className="back">
                <div className="back-content middle">
                  <div className="container">
                    <p>{info.solution}</p>
                  </div>
                  <span>Answer</span>
                  <div className="sm">
                    <a href="">
                      <i className="far fa-thumbs-up"></i>
                    </a>
                    <a href="">
                      <i className="far fa-thumbs-down"></i>
                    </a>
                    <a href="">
                      <i className="fas fa-comments"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="arrows">
          <a href="">
            <i className="fas fa-arrow-circle-left"></i>
          </a>
          <a href="">
            <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default withCookies(QuestionList);

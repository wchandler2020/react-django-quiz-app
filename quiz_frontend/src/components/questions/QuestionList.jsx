import React, { Component, Fragment } from "react";
import "./question.css";

class QuestionList extends Component {
  render() {
    return (
      <div className="card middle">
        <div className="front">
          <h3>Front</h3>
          <p>Question</p>
        </div>
        <div className="back">
          <div className="back-content middle">
            <h3>Back</h3>
            <span>Answer</span>
            <div className="sm">text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionList;

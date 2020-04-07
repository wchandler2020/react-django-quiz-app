import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <main role="main" className="inner cover">
        <div className="intro-text">
          <h1 className="cover-heading">Agatha Quiztie</h1>
          <p className="lead"></p>
          <p className="lead">
            <Link to="/registration" className="btn btn-lg btn-outline-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Homepage;

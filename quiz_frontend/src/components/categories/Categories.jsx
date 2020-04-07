import React, { Component } from "react";
import CATEGORY_DATA from "./CategoryData";

class Categories extends Component {
  state = {
    categories: CATEGORY_DATA,
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="category-cards">
        {categories.map((category) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={category.id}>
              <img
                className="card-img-top"
                src={category.image_URL}
                alt="Card image cap"
                style={{ height: "60%" }}
              />

              <h5 className="card-title display-4">{category.title}</h5>
              <a
                href="#"
                className="btn btn-primary btn-lg"
                style={{ fontSize: 16 }}
              >
                Test your know of {category.title}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Category extends Component {
  state = {
    // categories: []
    movies: []
  };

  render() {
    const { categories } = this.props;

    const { handleSelectedCategory } = this.props;
    // console.log("hlo", movies);
    return (
      <React.Fragment>
        <ListGroup>
          <ListGroupItem
            //  key={category.id}
            tag="a"
            onClick={() => handleSelectedCategory(null)}
            action
          >
            all
          </ListGroupItem>
          {this.props.categories.map(category => (
            <ListGroupItem
              key={category.id}
              onClick={() => handleSelectedCategory(category)}
              action
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h3>hiiii</h3> */}
      </React.Fragment>
    );
  }
}

export default Category;

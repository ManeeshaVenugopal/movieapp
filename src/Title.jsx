import React, { Component } from "react";

class Title extends Component {
  state = {
    // movies: []
  };

  render() {
    const { movies } = this.props;
    return <h6>showing {this.props.movies.length} movies from the database</h6>;
    //return <h6>length</h6>;
  }
}

export default Title;

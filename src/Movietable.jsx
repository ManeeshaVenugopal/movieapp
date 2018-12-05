import React, { Component } from "react";
import { Table, Button } from "reactstrap";
class Movietable extends Component {
  state = {
    // movieName: []
  };

  render() {
    const { movies, selectedPage } = this.props;
    console.log("myMovies.....", movies);

    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>stock</th>
              <th>price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.category.name}</td>
                <td>{movie.stock}</td>
                <td>{movie.price}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.props.handleDelete(movie)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>

      /*<h1>haiiiii</h1>; */
    );
  }
}

export default Movietable;

import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Category from "./Category";
import Title from "./Title";
import Movietable from "./Movietable";
import Paggnition from "./Paggnition";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    categories: [],
    movies: [],
    activePage: 1,
    itemsCountPerpage: 2,
    pages: 0,
    selectedCategory: null,
    selectedPage: 1
  };
  componentDidMount() {
    // console.log("component loaded");
    fetch("https://demo9514897.mockable.io/categories")
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({ categories: json }); //category ****merged***(not replaced) with json
      });
    //two functions are writing in one
    // console.log("component loaded");
    fetch("https://demo9514897.mockable.io/movies")
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({ movies: json }); //category ****merged***(not replaced) with json
      });
  }

  handleSelectedCategory = selectedCategory => {
    this.setState({ selectedCategory });
    console.log("selected category", selectedCategory);
    this.setState({ selectedPage: 1 });
  };

  handleDelete = movie => {
    let movies = [...this.state.movies];
    movies = movies.filter(m => m.id !== movie.id);
    this.setState({ movies });
    console.log("movieeesss.....", movies);
    this.setState({ hasDeleted: true });
  };

  handlePageSelection = pageIndex => {
    console.log("selected page", pageIndex);
    this.setState({ selectedPage: pageIndex });
  };

  render() {
    const {
      movies,
      selectedCategory,
      selectedPage,
      itemsCountPerpage,
      hasDeleted
    } = this.state;

    let filteredMovies = [...movies];

    if (selectedCategory !== null) {
      filteredMovies = filteredMovies.filter(
        categoryItem => categoryItem.category.name === selectedCategory.name
      );
    }
    let totalItemCount = filteredMovies.length;
    let totalPageCount = totalItemCount / itemsCountPerpage;

    let startIndex = (selectedPage - 1) * itemsCountPerpage;
    let endIndex = startIndex + itemsCountPerpage;
    filteredMovies = filteredMovies.slice(startIndex, endIndex);
    console.log("filtered movies", filteredMovies);
    console.log("totalPageCount", totalPageCount);
    console.log("totalPageCount", selectedPage);

    if (
      filteredMovies.length === 0 &&
      totalPageCount === selectedPage - 1 &&
      hasDeleted
    ) {
      console.log("moviesss");
      this.setState({ selectedPage: selectedPage - 1 });
      console.log(this.state.selectedPage);
    }

    return (
      <React-Fragment>
        <Container>
          <Row>
            <Col className="col-2">
              {/* wrriting like this below will automatically pass values */}
              <Category
                categories={this.state.categories}
                movies={this.state.movies}
                handleSelectedCategory={this.handleSelectedCategory}
              />
            </Col>
            <Col md="10">
              <Row>
                <Title movies={filteredMovies} />
              </Row>
              <Row>
                <Movietable
                  movies={filteredMovies}
                  handleDelete={this.handleDelete}
                />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="pagination justify-content-center">
              <Paggnition
                totalPageCount={totalPageCount}
                onPageClick={this.handlePageSelection}
              />
            </Col>
          </Row>
        </Container>
      </React-Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
class Paggnition extends Component {
  state = {
    values: []
  };
  render() {
    const { totalPageCount, onPageClick } = this.props;
    // console.log("props printing", totalPageCount);

    let rows = [];
    // console.log("arrays welcome");
    for (let i = 0; i < totalPageCount; i++) {
      // console.log("--------------------");

      rows[i] = i + 1;
      // console.log("inside array");
    }
    // console.log("arrays", rows);
    let i = 0;
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {rows.map(row => (
          <PaginationItem key={row}>
            <PaginationLink onClick={() => onPageClick(row)}>
              {row}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default Paggnition;

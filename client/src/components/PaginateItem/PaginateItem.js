import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginateItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Pagination>
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            {this.props.page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PaginateItem;
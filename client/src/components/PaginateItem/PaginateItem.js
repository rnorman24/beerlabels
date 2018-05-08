import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink, Button } from "reactstrap";
import API from '../../utils/API';

class PaginateItem extends Component {
  
    state = {
      labels: [],
      page: 1,
      message: ''
    };
  

  buttonClick = () => {
    API.getLabels(this.props.searchTerm, this.props.page)
      .then(res =>
        // console.log('This is res: ', res.data)
        this.setState({
          page: res.data.currentPage,
          labels: res.data,
          message: !res.data.length
            ? "No Beer Labels Found, Try a Different Search Term"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
     <Button onClick={this.buttonClick} >{this.props.page}</Button>
    );
  }
}

export default PaginateItem;

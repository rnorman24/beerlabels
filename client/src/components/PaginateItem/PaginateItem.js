import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink, Button } from "reactstrap";

const PaginateItem = ({ page, handleClick }) => {
  return <Button onClick={() => handleClick(page)}>{page}</Button>;
};

export default PaginateItem;

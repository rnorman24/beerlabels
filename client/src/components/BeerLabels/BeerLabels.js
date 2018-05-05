import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import BeerLabelItem from '../BeerLabelItem';

const BeerLabels = ({ labels }) => {
  const labelArray = labels.map(label => {
    return (
      <BeerLabelItem 
      label={label}
      key={label.id}
      />
    )
  })
  return (
    <div>
      {labelArray}
    </div>
  )
}

export default BeerLabels;

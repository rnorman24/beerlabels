import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const BeerLabelItem = ({ label }) => {
  return (
    <Card>
      <CardTitle>
        {label.name}
      </CardTitle>
      <CardBody>
        <img src={label.labels.medium} alt={label.name} />
      </CardBody>
    </Card>
  )
}

export default BeerLabelItem;

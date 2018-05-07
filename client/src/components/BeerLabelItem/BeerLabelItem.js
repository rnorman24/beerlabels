import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import InfoModal from '../InfoModal';
import "./BeerLabelItem.css";

const BeerLabelItem = ({ name, medium, id, handleClick, buttonText, buttonLabel, brewery, description, abv, available, website }) => {
  return (
    <div className="item-container float-left">
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardBody>
          <CardImg width="100%" src={medium} alt={name} />
        </CardBody>
        <Button onClick={() => handleClick(id)} color='success'>
          {buttonText}
        </Button>
        <InfoModal
        buttonLabel={buttonLabel}
        brewery={brewery}
        description={description}
        abv={abv}
        website={website}
        available={available}
        />
      </Card>
    </div>
  );
};

export default BeerLabelItem;

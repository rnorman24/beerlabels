import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import InfoModal from "../InfoModal";
import "./BeerLabelItem.css";

const BeerLabelItem = ({
  name,
  medium,
  id,
  handleClick,
  buttonText,
  buttonLabel,
  brewery,
  description,
  abv,
  available,
  website
}) => {
  return (
    <div className="item-container float-left">
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333", padding: 0 }}
      >
        <CardSubtitle style={{ padding: '0.5rem' }}>Beer Name:</CardSubtitle>
        <CardText style={{ paddingLeft: '0.5rem' }}>{name}</CardText>
        <CardBody>
          <CardImg width="100%" src={medium} alt={name} />
        </CardBody>
        <CardFooter>
          <Button className='float-right' onClick={() => handleClick(id)} outline color="success">
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default BeerLabelItem;

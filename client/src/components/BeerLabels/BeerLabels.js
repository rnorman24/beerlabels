import React from "react";

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

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BeerLabelItem from "../../components/BeerLabelItem";
import API from "../../utils/API";
import SearchBeers from "../../components/SearchBeers";

class Saved extends Component {
  state = {
    labels: []
  };

  componentDidMount() {
    this.getSavedLabels();
  }

  getSavedLabels = () => {
    API.getSavedLabels()
      .then(res =>
        // console.log('This is res: ', res.data)
        this.setState({
          labels: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleLabelDelete = id => {
    API.deleteLabel(id).then(res => this.getSavedLabels());
  };

  render() {
    console.log("This is this.state: ", this.state);
    return (
      <Container>
        <Row>
          <Col md="12">
            {this.state.labels.map(label => (
              <BeerLabelItem
                key={label.id}
                id={label.id}
                name={label.name}
                medium={label.labels.medium}
                brewery={label.brewery}
                description={label.description}
                abv={label.abv}
                website={label.website}
                handleClick={this.handleLabelDelete}
                buttonText="Delete Label"
                buttonLabel='Beer Info'
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;

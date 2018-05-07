import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BeerLabelItem from "../../components/BeerLabelItem";
import API from "../../utils/API";
import SearchBeers from "../../components/SearchBeers";
import PanginateItem from '../../components/PaginateItem';

class Home extends Component {
  state = {
    labels: [],
    message: "Search For Beer Labels To Begin!"
  };

  getLabels = (searchTerm, page) => {
    API.getLabels(searchTerm)
      .then(res =>
        // console.log('This is res: ', res.data)
        this.setState({
          labels: res.data,
          message: !res.data.length
            ? "No Beer Labels Found, Try a Different Search Term"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  handleLabelSave = id => {
    const label = this.state.labels.find(label => label.id === id);
    API.saveLabel(label).then(res => this.getLabels());
  };

  render() {
    console.log("This is this.state.labels: ", this.state.labels);
    return (
      <Container>
        <Row>
          <Col md="12">
            <SearchBeers getLabels={this.getLabels.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {this.state.labels.map(label => (
              <BeerLabelItem
                key={label.id}
                id={label.id}
                name={label.name}
                medium={label.labels.medium}
                brewery={label.breweries[0].name}
                description={label.description}
                abv={label.abv}
                website={label.breweries[0].website}
                // available={label.available.description}
                handleClick={this.handleLabelSave}
                buttonText="Save Label"
                buttonLabel='Beer Info'
              />
            ))}
            <PanginateItem page={1} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

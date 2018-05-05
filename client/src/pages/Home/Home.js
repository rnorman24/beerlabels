import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BeerLabels from "../../components/BeerLabels";
import API from "../../utils/API";
import SearchBeers from "../../components/SearchBeers";

class Home extends Component {
  state = {
    labels: [],
    message: "Search For Beer Labels To Begin!"
  }

  getLabels = (searchTerm) => {
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
  }

  render() {
    console.log("This is this.state: ", this.state);
    return (
      <Container>
        <Row>
          <Col md="12">
            <SearchBeers getLabels={this.getLabels.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <BeerLabels labels={this.state.labels} />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

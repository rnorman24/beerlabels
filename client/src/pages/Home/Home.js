import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import BeerLabelItem from "../../components/BeerLabelItem";
import API from "../../utils/API";
import SearchBeers from "../../components/SearchBeers";
import Pagination from "react-js-pagination";
import "./style.css";

class Home extends Component {
  state = {
    activePage: 1,
    totalResults: 0,
    labels: [],
    message: "Search For Beer Labels To Begin!",
    searchTerm: ""
  };

  getLabels = (searchTerm, page) => {
    API.getLabels(searchTerm, page)
      .then(res => {
        this.setState({
          totalResults: res.data.totalResults,
          labels: res.data.data,
          searchTerm: searchTerm,
          message: !res.data.data.length
            ? "No Beer Labels Found, Try a Different Search Term"
            : ""
        });
      })
      .catch(err => console.log(err));
  };

  handleLabelSave = id => {
    const label = this.state.labels.find(label => label.id === id);
    API.saveLabel(label).then(res => this.getLabels());
  };

  handlePageChange = page => {
    console.log("The active page is: ", page);
    this.setState({ activePage: page });
    this.getLabels(this.state.searchTerm, page);
  };

  render() {
    // console.log("This is this.state.labels: ", this.state.labels);
    return (
      <Container>
        <Row>
          <Col md="12">
            <SearchBeers getLabels={this.getLabels.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Pagination
              hideDisabled={true}
              activePage={this.state.activePage}
              itemsCountPerPage={50}
              totalItemsCount={this.state.totalResults}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {this.state.labels
              .filter(label => typeof label.labels !== "undefined")
              .map(label => (
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
                  buttonLabel="Beer Info"
                  buttonColor="success"
                />
              ))}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Pagination
              hideDisabled={true}
              activePage={this.state.activePage}
              itemsCountPerPage={50}
              totalItemsCount={this.state.totalResults}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

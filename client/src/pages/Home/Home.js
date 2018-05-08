import React, { Component } from "react";
import { Container, Row, Col, Pagination } from "reactstrap";
import BeerLabelItem from "../../components/BeerLabelItem";
import API from "../../utils/API";
import SearchBeers from "../../components/SearchBeers";
import PaginateItem from '../../components/PaginateItem';

class Home extends Component {
  state = {
    page: 1,
    pages: 1,
    labels: [],
    message: "Search For Beer Labels To Begin!",
    pagearray : [],
    searchTerm: ''
  };

  getLabels = (searchTerm) => {
    let pagearray = []
    API.getLabels(searchTerm, this.state.page)
      .then(res => {
        console.log('This is res.numberOfPages: ', res.numberOfPages);

        this.setState({
          pages: res.data.numberOfPages,
          page: res.data.currentPage,
          labels: res.data,
          searchTerm: searchTerm,
          message: !res.data.length
            ? "No Beer Labels Found, Try a Different Search Term"
            : ""
        })
        console.log(`This is pages: `, this.state.pages);
        for(let i=1;i<=this.state.pages;i++)
        {
           pagearray.push(i)
        }
        this.setState({
          pagearray : pagearray
        })
        console.log("The pagearray",this.state.pagearray)
      })
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
            {this.state.pagearray.map(page => (
              <PaginateItem
              page={page}
              searchTerm={this.state.searchTerm}
            
            />
            ))}
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Button, Label } from "reactstrap";
import './searchBeers.css';

class SearchBeers extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  buttonclick = () => {
    this.props.getLabels(this.state.searchTerm);
  };

  render() {
    return (
      <Form style={{ margin: '1rem' }} className='form-inline d-flex justify-content-center'>
        <FormGroup className='bg-light'>
          <Col>
          <Input
            type="text"
            placeholder="Search Beer Labels"
            value={this.state.searchTerm}
            onChange={event => this.handleInputChange(event.target.value)}
          />
          </Col>
          <Button color='dark' onClick={this.buttonclick}>Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBeers;

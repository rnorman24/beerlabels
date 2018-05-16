import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Button, Label } from "reactstrap";

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
        <FormGroup row className='bg-light'>
          <Label color='dark' md={4} >Beer Label Search</Label>
          <Col md={6}>
          <Input

            type="text"
            placeholder="Type in search term"
            value={this.state.searchTerm}
            onChange={event => this.handleInputChange(event.target.value)}
          />
          </Col>
          <Button color='dark' onClick={this.buttonclick} md={2} >Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBeers;

import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import API from "../../utils/API";

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
      <Form>
        <FormGroup>
          <Input
            type="text"
            placeholder="Type in search term"
            value={this.state.searchTerm}
            onChange={event => this.handleInputChange(event.target.value)}
          />
          <Button onClick={this.buttonclick}>Button</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SearchBeers;

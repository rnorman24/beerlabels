import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

   render() {
    return (
      <div>
        <Button outline color="warning" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.props.brewery}</ModalHeader>
          <ModalBody>
          {this.props.description}
          <p><strong>ABV:</strong> {this.props.abv}%</p>
          <p><strong>Website:</strong></p><a href={this.props.website}> {this.props.website}</a>
          </ModalBody>
          
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;

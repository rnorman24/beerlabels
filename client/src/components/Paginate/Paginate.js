import React, { Component } from "react";
import Pagination from "rc-pagination";
import Select from "rc-select";
import "rc-pagination/assets/index.css";
import "rc-select/assets/index.css";

class Paginate extends Component {
  constructor(props) {
    super(props);
  }

  onChange = (current) => {
    this.props.getLabels(current);
  };

  render() {
    return (
      <Pagination
        selectComponentClass={Select}
        defaultPageSize={20}
        defaultCurrent={5}
        // onShowSizeChange={onShowSizeChange}
        onChange={this.onChange}
        total={450}
      />
    );
  }
}

export default Paginate;

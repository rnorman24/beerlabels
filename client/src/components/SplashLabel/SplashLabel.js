import React, { Component } from "react";
import axios from 'axios';
import './SplashLabel.css';

class SplashLabel extends Component {
  state = {
    imageUrl: []
  };

  componentDidMount() {
    axios.get("/api/splashLabels").then(res => {
      console.log("This is res: ", res);
      this.setState({ imageUrl: res.data });
    });
  }

  render() {
    return (
      <div className="label-container">
        {this.state.imageUrl.map(item => (
          <img src={item.imageUrl} key={item._id} alt={item["_id"]} />
        ))}
      </div>
    );
  }
}

export default SplashLabel;

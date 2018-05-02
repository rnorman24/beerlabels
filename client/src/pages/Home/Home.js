import React, { Component } from 'react';
import Form from '../../components/Form';

class Home extends Component {
  state = {
    labels: [],
    q: '',
    message: 'Search For Beer Labels To Begin!'
  };

  getLabels = () => {
    API.getLabels({
      q: this.state.q
    })
    .then(res =>
      this.setState({
        labels: res.data,
        message: !res.data.length
          ? 'No Beer Labels Found, Try a Different Search Term'
          : ''
      })
    )
  }
}

import React, { Component } from 'react'

export default class MountingJson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Api: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res =>
        res.json()
      )
      .then(result => {
        this.setState({ users: result });

      });
  }
  render() {
    return <div>MountingJson</div>;
  }
}

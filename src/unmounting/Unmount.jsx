// life cycle unmounting phase

import React, { Component } from "react";

export default class Unmount extends Component {
  state = {
    bool: true,
  };
  Onchange = () => {
    this.setState({ bool: false });
  };

  render() {
    return (
      <div>
        {this.state.bool ? <Delete /> : null}

        <button onClick={this.Onchange}>Click me</button>
      </div>
    );
  }
}

class Delete extends Component {
  componentWillUnmount() {
    // confirm("are you sure you want to delete");
  }
  render() {
    return <div>Iam very Bad person</div>;
  }
}
 
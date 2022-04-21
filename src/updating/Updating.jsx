import React, { Component } from "react";

export default class Updating extends Component {
  state = {
    food: "Kabab",
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ food: "mutton biriyani" });
    }, 3000);
  }

  // boolean to update or not
  shouldComponentUpdate() {
    return true;
  }

  ///snapshot to store previous value\
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("prevProps", prevProps);
    console.log("prevState", prevState);
     document.getElementById("previous_state").innerHTML =
       "previous_state was :"+ prevState.food;
  }

  // component did update

  componentDidUpdate(prevState, snapshot) {
    // console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    document.getElementById("current_state").innerHTML =
      "current_state was :" + this.state.food;
  }
  render() {
    return (
      <div>
        Non-veg:{this.state.food}
        <h2 id="previous_state"></h2>
        <h2 id="current_state"></h2>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class LifeCycles extends Component {
    state = {
        users:"harish"
    }
    // static getDerivedStateFromProps(props) {
    //     return {
    //         users:props.myName,
    //     }
    // }
    componentDidMount() {
       
        setTimeout(() => {
            this.setState({ users: "Rajesh" });
      },2000)
        
    }
    // updating phase
    shouldComponentUpdate() {
        return true;
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("prevState is -"+prevState.users);
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
        console.log(snapshot);
    }
    
  render() {
    return (
        <div>
            <h1>{ this.state.users}</h1>
      </div>
    )
  }
}

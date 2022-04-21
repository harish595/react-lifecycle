import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Shashi",
        };
    }
    // static getDerivedStateFromProps(props) {
    //     return {
    //       username: props.mytrainer,
    //     };
    // }
    componentDidMount() {
        setTimeout(() => {
           this.setState({username:"Dixith"})
        },3000)
    }
    render() {
      console.log("i am a render");
    return (
      <> 
            <h1>
                hello mounting phase
                <h3>{ this.state.username}</h3>
    </h1>
      </>
    )
  }
}

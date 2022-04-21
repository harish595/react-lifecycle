// import React, { Component } from 'react'

// export default class ErrorBoundary extends Component {
//     state = {
//         hasError:false,
//     }

//     static getDerivedStateFromError(error) {
//         return {
//             hasError: true,
//         };
//     }

//     componentDidCatch(err, errInfo) {
//         console.log(err);
//         console.log(errInfo);
//     }
//   render() {
//       if (this.state.hasError) {
//        return <h2 style={{color:'red'}}>Something went wrong!!</h2>
//       } else {
//           return this.props.children
//    }
//   }
// }



// *************////

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
         hasError:false,
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError:true,
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }
  render() {
    
      if (this.state.hasError) {
          return  <h2 style={{color:"red"}}>something went wrong</h2>
      }
      else {
        return  this.props.children
      }
    
  }
}

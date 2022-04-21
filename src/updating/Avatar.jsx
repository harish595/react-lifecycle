///fetching json from api
// import React, { Component } from 'react'

// export default class Avatar extends Component {
//   state = {
//     users:[],
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ users: data });
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.users.map(x=> {
//           return (
//             <div>
//               <h1>{x.name}</h1>
//               <h1>{x.id}</h1>
              
//             </div>
//         )
//         })}
//       </div>
//     )
//   }
// }


// fetching json from api and using table 
import React, { Component } from 'react'

export default class Avatar extends Component {
  state = {
    users:[],
  }
  componentDidMount() {
    fetch("https://api.github.com/users").then(res => res.json())
      .then(data => {
      this.setState({users:data})
    })
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Login</th>
            <th>URL</th>
            <th>Photos</th>
          </tr>
        </thead>
        <tbody>
         
            {this.state.users.map(x => {
              return (
                <tr>
                  <td>{ x.id}</td>
                  <td>{ x.login}</td>
                  <td>{ x.url}</td>
                  <td>
                    <img src={x.avatar_url} alt="" />
                  </td>
                </tr>
              );
            })}
            
          
        </tbody>
      </table>
    )
  }
}

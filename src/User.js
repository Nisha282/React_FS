import React, { Component } from "react";

// ----------------error boundary example---------------------

class User extends Component {
  render(){
    if(true){
      throw new Error('custom error')
    }
    return(
      <div>
        <h1> User Component</h1>
      </div>
    )
  }
}









// -------------------for life cycle example-------------------------
// class User extends Component {
//   componentWillUnmount() {
//     alert("User has been deleted");
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Name : Nisha</li>
//           <li>Email : nishsahu@test.com</li>
//           <li>Contact No : 0000000000</li>
//         </ul>
//       </div>
//     );
//   }
// }

export default User;

import React, { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    alert("User has been deleted");
  }
  render() {
    return (
      <div>
        <ul>
          <li>Name : Nisha</li>
          <li>Email : nishsahu@test.com</li>
          <li>Contact No : 0000000000</li>
        </ul>
      </div>
    );
  }
}

export default User;

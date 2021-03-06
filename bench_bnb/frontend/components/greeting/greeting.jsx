import React from "react";
import { Link } from "react-router-dom";

export default class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const display = this.props.currentUser ? (
      <div>
        <p>Welcome, {this.props.currentUser.username}</p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/signup" className="top-nav-link">Sign Up</Link>
        <Link to="/login" className="top-nav-link">Login</Link>
      </div>
    )

    return (
      <div>
        {display}
      </div>
    )
  }
}
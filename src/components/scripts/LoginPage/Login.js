import { Card } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // };
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "Aaron" && password === "12345") {
      localStorage.setItem("token", "Aaron");
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <React.Fragment>
        <form className="container" onSubmit={this.submitForm}>
          <Card
            style={{
              marginTop: 100,
              height: 400,
              width: 800,
              marginLeft: 150,
              backgroundColor: "lightblue",
            }}
          >
            <center>
              <h1 style={{ marginTop: 30 }}>Login</h1>
              <label for="exampleInputEmail1">Username: </label>
              <input
                type="text"
                placeholder=""
                style={{ width: 400, marginTop: 70, height: 35 }}
                name="username"
                value={this.state.username}
                onChange={this.onHandleChange}
              />
              <br />
              <label for="exampleInputEmail1">Password: </label>
              <input
                type="password"
                placeholder=""
                style={{ width: 400, marginTop: 20, height: 35 }}
                name="password"
                value={this.state.password}
                onChange={this.onHandleChange}
              />
              <br />
              <input style={{ marginTop: 30, color: "blue" }} type="Submit" />
            </center>
          </Card>
        </form>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../reuseable/Navbar";

class User extends Component {
  constructor() {
    super();
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    localStorage.removeItem("token");

    this.state = {
      Password: localStorage.getItem("password"),
      changebtn: true,
      loggedIn,
    };
  }
  changePassword = (e) => {
    e.preventDefault();
    this.setState({
      changebtn: false,
      Password: "",
    });
    if (!this.state.changebtn) {
      localStorage.setItem("password", this.state.Password);
      this.setState({
        Password: this.state.password,
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-6 mx-auto">
              <form>
                <div className="form-group">
                  <label>username : </label>
                  {localStorage.getItem("token")}
                </div>
                <div className="form-group">
                  <label>Password :</label>
                  <input
                    type="password"
                    name="Password"
                    className="ml-1"
                    style={{ width: 300, height: 35 }}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => {
                      this.setState({ Password: e.target.value });
                    }}
                  />
                </div>
                <div className="row" style={{ marginTop: 100 }}>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary"
                      onClick={this.changePassword}
                      style={{ marginTop: 200 }}
                    >
                      {this.state.changebtn
                        ? "Change Password"
                        : "Save Password"}
                    </button>
                  </div>
                  <div className="col-4 mx-auto">
                    <Link
                      to="/"
                      type="button"
                      class="btn btn-outline-secondary ml-5"
                      style={{ marginTop: 200 }}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default User;

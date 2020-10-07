import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Navbar from "../../reuseable/Navbar";
import { Link, Redirect } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      Dropdown: "false",
      loggedIn,
    };
  }

  onClickOfDropdown = () => {
    this.setState({
      Dropdown: !this.state.Dropdown,
    });
  };

  render() {
    const { Dropdown } = this.state;
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.onClickOfDropdown}
            className="mt-3 p-3 dropdown-toggle"
          >
            writerbook
          </Button>
          {Dropdown ? (
            <p className="mt-4">
              WriterBook is an app to share your life stories When it comes to
              writing apps, less can be more. The fewer options there are on
              screen, the more you can concentrate on your writing. At least,
              that's the theory embraced by WriterBook. WriterBook isn't the
              only distraction-free writing app, but it is one of the simplest.
              It is Free, either. Some may find, however, that it's so light
              that it doesn't include the necessary tools for building a
              substantial project from your writing, such as a book or a
              screenplay. You won't find a library or file folder view, nor is
              there space to keep notes on scenes or characters. WriterBook is,
              therefore, best for one-off pieces of writing. It's a good writing
              app. http://writerbook-aaron.herokuapp.com
            </p>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
// style={{marginRight: spacing + 'em'}}

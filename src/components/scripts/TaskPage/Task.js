import React, { Component } from "react";
import Navbar from "../../reuseable/Navbar";
import { Link, Redirect } from "react-router-dom";

class Tasks extends Component {
  constructor() {
    super();
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loading: true,
      Taskdata: [],
      tasks: "",
      index: 3,
      loggedIn,
    };
  }
  async componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/todos";
    let response = await fetch(url);
    let task = await response.json();
    this.setState({ tasks: task, loading: false });
    let data = this.state.tasks.slice(0, this.state.index);
    this.setState({ Taskdata: data });
    localStorage.setItem("TODO", JSON.stringify(data));
  }

  _onAdd(i) {
    let additem = this.state.tasks.slice(0, this.state.index + 1);
    localStorage.setItem("TODO", JSON.stringify(additem));
    this.setState({
      Taskdata: JSON.parse(localStorage.getItem("TODO")),
      index: this.state.index + 1,
    });
  }

  _onDelete(i) {
    const list = this.state.Taskdata.filter((task, j) => i !== j);
    this.setState({ Taskdata: list, index: this.state.index - 1 });
    localStorage.setItem("TODO", JSON.stringify(list));
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    if (this.state.loading || !this.state.tasks) {
      return <h2>Loading.....</h2>;
    } else {
      return (
        <React.Fragment>
          <Navbar />
          <div>
            {this.state.Taskdata.map((data, index) => (
              <div className="container" key={data.id}>
                <div className="row mt-3">
                  <section className="col-3">
                    <h5>{data.id}</h5>
                  </section>
                  <section className="col-3">
                    <h6> {data.title}</h6>
                  </section>
                  <section className="col-3" style={{ paddingLeft: 140 }}>
                    <h6> {data.completed.toString()}</h6>
                  </section>
                  <div className="col-3">
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        marginLeft: 150,
                      }}
                      type="submit"
                      className="btn"
                      onClick={(e) => this._onDelete(index)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className="row">
              <div className="col-3 ml-5">
                <br />
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  onClick={(e) => this._onAdd(this.state.index)}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Tasks;

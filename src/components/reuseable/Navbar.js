import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            
            <div className=" container">
            <nav
              class="navbar navbar-expand-lg navbar-light bg-light"
              style={{ borderRadius: 10 }}
            >
              <a class="navbar-brand" href="#">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a
                    class="nav-item nav-link active"
                    href="/home"
                    style={{ marginLeft: 100 }}
                  >
                    Home <span class="sr-only">(current)</span>
                  </a>
                  <a class="nav-item nav-link" href="/task" style={{ marginLeft: 100 }}>
                    Tasks
                  </a>
                  <a class="nav-item nav-link" href="/user" style={{ marginLeft: 100 }}>
                    User
                  </a>
                </div>
              </div>
            </nav>
                
            </div>
        )
    }
}

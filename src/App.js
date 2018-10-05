import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
  }
  setIsCollapsed = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };
  render() {
    return (
      <div
        className={
          this.state.isCollapsed
            ? "container-collapsed"
            : "container-not-collapsed"
        }
      >
        <div className="header">
          <button onClick={this.setIsCollapsed}>&#9776;</button>
          <h1>HEADER</h1>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 1
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 2
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 3
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 4
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 5
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 6
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 7
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 8
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 9
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 10
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 11
              </span>
            </li>
            <li>
              <span className="icon">&#9786;</span>
              <span
                className={
                  this.state.isCollapsed ? "app-visible" : "app-hidden"
                }
              >
                App 12
              </span>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="full-container">
            <div>Full</div>
          </div>
          <div className="half-container">
            <div>Half</div>
            <div>Half</div>
          </div>
          <div className="third-container">
            <div>Third</div>
            <div>Third</div>
            <div>Third</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

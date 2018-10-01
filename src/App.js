import React, { Component } from "react";
import logo from "./logo.svg";
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
        class={
          this.state.isCollapsed
            ? "container-collapsed"
            : "container-not-collapsed"
        }
      >
        <div class="header">
          <button onClick={this.setIsCollapsed}>&#9776;</button>
          <h1>HEADER</h1>
        </div>
        <div class="sidebar">
          <ul>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 1
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 2
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 3
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 4
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 5
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 6
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 7
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 8
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 9
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 10
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 11
              </span>
            </li>
            <li>
              <span class="icon">&#9786;</span>
              <span
                class={this.state.isCollapsed ? "app-visible" : "app-hidden"}
              >
                App 12
              </span>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="full-container">
            <div>Full</div>
          </div>
          <div class="half-container">
            <div>Half</div>
            <div>Half</div>
          </div>
          <div class="third-container">
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

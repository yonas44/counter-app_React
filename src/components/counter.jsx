import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor () {
    super()
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement () {
    console.log("Increment pressed!", this.state.count);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeColors()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        { this.state.tags.length === 0 && 'Please add a new tag!' }
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeColors() {
    let colors = "badge m-2 badge-";
    colors += this.state.count === 0 ? "warning" : "primary";
    return colors;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

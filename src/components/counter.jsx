import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <React.StrictMode>
        <div>
          <span className={this.getBadgeColors()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm'
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-2'
          >
            Delete
          </button>
        </div>
      </React.StrictMode>
    );
  }

  getBadgeColors() {
    let colors = "badge m-2 badge-";
    colors += this.props.counter.value === 0 ? "warning" : "primary";
    return colors;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

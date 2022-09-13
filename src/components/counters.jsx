import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <React.StrictMode>
        <div>
          <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
            Reset
          </button>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
            />
          ))}
        </div>
      </React.StrictMode>
    );
  }
}

export default Counters;

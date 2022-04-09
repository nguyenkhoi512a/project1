import { Component } from "react";
import "./CounterButton.css";

class CounterButton extends Component {
 
  render() {
    return (
      <div className="counter">
        <button
          onClick={() => {
            this.props.increamentMethod(this.props.by);
          }}
        >
          +{this.props.by}
        </button>
        <button
          onClick={() => {
            this.props.decreamentMethod(this.props.by);
          }}
        >
          -{this.props.by}
        </button>
      </div>
    );
  }

  
}

export default CounterButton;

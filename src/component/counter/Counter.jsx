import { Component } from "react";
import CounterButton from "../counter-button/CounterButton";
import "./Counter.css";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increament = this.increament.bind(this);
    this.reset = this.reset.bind(this);
  
    this.decreament = this.decreament.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          increamentMethod={this.increament}
          decreamentMethod={this.decreament}
        />
        <CounterButton
          by={5}
          increamentMethod={this.increament}
          decreamentMethod={this.decreament}
        />
        <CounterButton
          by={10}
          increamentMethod={this.increament}
          decreamentMethod={this.decreament}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  increament = (by) =>{
    this.setState({ counter: this.state.counter + by });
  }
  decreament(by) {
    this.setState({ counter: this.state.counter - by });
  }
  reset() {
    this.setState({ counter: 0 });
  }

  //   increament() {
  //     console.log("Increment");
  //     console.log(this.state.counter);
  //     this.setState({ counter: this.state.counter + this.props.by});
  //   }
}

export default Counter;

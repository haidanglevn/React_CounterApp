import "./Main.css";
import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
  };
  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  minusOneHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  minusFiveHandler = () => {
    this.setState({ counter: this.state.counter - 5 });
  };
  reset = () => {
    this.setState({ counter: (this.state.counter = 0) });
  };
  render() {
    return (
      <main>
        <div className="center">
          <div className="circle center">
            <h1>{this.state.counter}</h1>
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.minusFiveHandler}>- 5</button>
          <button onClick={this.minusOneHandler}>- 1</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.addOneHandler}>+ 1</button>
          <button onClick={this.addFiveHandler}>+ 5</button>
        </div>
      </main>
    );
  }
}

export default Main;

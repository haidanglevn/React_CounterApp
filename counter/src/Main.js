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
    if (this.state.counter <= 0) {
      this.setState({ counter: (this.state.counter = 0) });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  minusFiveHandler = () => {
    if (this.state.counter <= 4) {
      this.setState({ counter: (this.state.counter = 0) });
    } else if (this.state.counter >= 5) {
      this.setState({ counter: this.state.counter - 5 });
    }
  };
  reset = () => {
    this.setState({ counter: this.state.counter - this.state.counter });
  };
  render() {
    let circleClass;
    if (this.state.counter == 0) {
      circleClass = "circle center";
    } else if (this.state.counter % 2 === 0) {
      circleClass = "circle center even";
    } else {
      circleClass = "circle center odd";
    }

    return (
      <main>
        <div className="center">
          <div className={circleClass}>
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

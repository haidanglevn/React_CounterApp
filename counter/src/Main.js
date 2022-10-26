import "./Main.css";
import React, { Component } from "react";
import Button from "./UI/Button";

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
    /* if (this.state.counter == 0) {
      circleClass = "circle center";
    } else if (this.state.counter % 2 === 0) {
      circleClass = "circle center even";
    } else {
      circleClass = "circle center odd";
    } */

    // alternative
    this.state.counter === 0
      ? (circleClass = "circle center")
      : this.state.counter % 2 === 0
      ? (circleClass = "circle center even")
      : (circleClass = "circle center odd");

    return (
      <main>
        <div className="center">
          <div className={circleClass}>
            <h1>{this.state.counter}</h1>
          </div>
        </div>
        <div className="button-container">
          <Button click={this.minusFiveHandler}>- 5</Button>
          <Button click={this.minusOneHandler}>- 1</Button>
          <Button click={this.reset}>Reset</Button>
          <Button click={this.addOneHandler}>+ 1</Button>
          <Button click={this.addFiveHandler}>+ 5</Button>
        </div>
      </main>
    );
  }
}

export default Main;

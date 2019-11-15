import React, { Component } from "react";
import Counter from "./component/CounterApp/Counter";
import CounterMapDispatchFn from "./component/CounterApp/CounterMapDispatchFn";
import CounterMapDispatchObj from "./component/CounterApp/CounterMapDispatchObj";

export class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Counter />
        <CounterMapDispatchFn />
        <CounterMapDispatchObj />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Badge } from "antd";
import { increment, decrement, reset } from "./redux/actions/action";

export class Counter extends Component {
  render() {
    const { count, dispatch } = this.props;
    console.log(this.props);
    return (
      <div
        style={{
          margin: "20px",
          border: "1px solid #2af",
          borderRadius: "4px",
          width: "200px",
          textAlign: "center",
          color: "#4fa"
        }}
      >
        <h3>Counter App Without MapDispatch Func</h3>
        <div
          style={{
            margin: "8px",
            display: "flex"
          }}
        >
          <div
            style={{
              background: "#2db7f5",
              width: "75px",
              color: "#fff",
              fontSize: "16px",
              padding: "3px 5px",
              borderRadius: "5px"
            }}
          >
            Count :
          </div>
          <Badge
            style={{
              background: "#52c41a",
              margin: "5px",
              fontSize: "16px"
            }}
            count={count}
          />
        </div>
        <Button
          style={{ margin: "8px" }}
          type="primary"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>

        <Button
          style={{ margin: "8px" }}
          type="primary"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <Button
          style={{ margin: "8px" }}
          type="danger"
          onClick={() => dispatch(reset())}
        >
          RESET
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { countReducers } = state;
  return countReducers;
};

export default connect(mapStateToProps)(Counter);

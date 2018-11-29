import React, { Component } from "react";
import classes from "./BoxOverlay.module.css";

class BoxOverlay extends Component {
  state = {
    isTextVisible: true
  };

  hideHexText = () => {
    const newState = { ...this.state };
    newState.isTextVisible = false;
    this.setState(newState);
  };

  showHexText = () => {
    const newState = { ...this.state };
    newState.isTextVisible = true;
    this.setState(newState);
  };

  render() {
    const style = {
      opacity: "0"
    };

    this.state.isTextVisible ? (style.opacity = 1) : (style.opacity = 0);

    setTimeout(this.hideHexText, 2000);

    return (
      <p className={classes.hexText} style={style}>
        {this.props.randomHex}
      </p>
    );
  }
}

export default BoxOverlay;

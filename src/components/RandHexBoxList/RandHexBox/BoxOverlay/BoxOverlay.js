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
    setTimeout(this.hideHexText, 2000);
  };

  componentDidMount() {
    setTimeout(this.hideHexText, 2000);
  }

  render() {
    let style = this.state.isTextVisible ? { opacity: "1" } : { opacity: "0" };

    return (
      <div className={classes.BoxOverlay} onMouseOver={this.showHexText}>
        <button
          className={classes.close}
          style={style}
          onClick={this.props.del}
        >
          X
        </button>
        <p className={classes.hexText} style={style}>
          {this.props.randomHex}
        </p>
      </div>
    );
  }
}

export default BoxOverlay;

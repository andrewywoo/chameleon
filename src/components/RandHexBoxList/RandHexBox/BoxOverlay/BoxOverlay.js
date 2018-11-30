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
    const style = {
      opacity: "0"
    };

    this.state.isTextVisible ? (style.opacity = 1) : (style.opacity = 0);

    // (function() {
    //   let flag = true;
    //   return function() {
    //     if (flag) {
    //       flag = false;
    //       this.showHexText();
    //     }
    //   };
    // })();

    //setTimeout(this.hideHexText, 2000);

    return (
      <div className={classes.BoxOverlay} onMouseOver={this.showHexText}>
        <div
          className={classes.close}
          style={style}
          onClick={this.props.delete}
        >
          X
        </div>
        <p className={classes.hexText} style={style}>
          {this.props.randomHex}
        </p>
      </div>
    );
  }
}

export default BoxOverlay;

import React from "react";
import BoxOverlay from "./BoxOverlay/BoxOverlay";
import classes from "./RandHexBox.module.css";

const randHexBox = props => {
  return (
    <div
      className={classes.RandHexBox}
      style={{ backgroundColor: props.randomHex }}
      onClick={props.change}
    >
      <BoxOverlay randomHex={props.randomHex} delete={props.delete} />
    </div>
  );
};

export default randHexBox;

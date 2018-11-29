import React from "react";
import BoxOverlay from "./BoxOverlay/BoxOverlay";
import classes from "./RandHexBox.module.css";

const randHexBox = props => {
  return (
    <div
      className={classes.RandHexBox}
      style={{ backgroundColor: props.randomHex }}
      onClick={props.clicked.bind(this, props.index)}
      //onMouseOver={props.hover.bind(this, props.index)}
      //onMouseLeave={props.hover.bind(this, props.index)}
    >
      <BoxOverlay
        randomHex={props.randomHex}
        isVisible={props.isVisible}
        index={props.index}
      />
    </div>
  );
};

export default randHexBox;

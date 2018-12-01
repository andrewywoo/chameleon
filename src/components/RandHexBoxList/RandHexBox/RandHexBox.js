import React from "react";
import BoxOverlay from "./BoxOverlay/BoxOverlay";
import classes from "./RandHexBox.module.css";

const randHexBox = props => {
  let classN = [classes.RandHexBox];
  if (props.view === "listed") {
    classN.push(classes.listView);
  } else {
    classN = [classes.RandHexBox];
  }

  return (
    <div
      className={classN.join(" ")}
      style={{ backgroundColor: props.randomHex }}
      onClick={props.change}
    >
      <BoxOverlay randomHex={props.randomHex} del={props.del} />
    </div>
  );
};

export default randHexBox;

import React from "react";
import BoxOverlay from "./BoxOverlay/BoxOverlay";
import "./RandHexBox.css";

const randHexBox = props => {
  let classes = ["RandHexBox"];
  if (props.view === "listed") {
    classes.push("list-view");
    console.log(classes.join(" "));
  } else {
    classes = ["RandHexBox"];
    console.log(classes.join(" "));
  }

  return (
    <div
      className={classes.join(" ")}
      style={{ backgroundColor: props.randomHex }}
      onClick={props.change}
    >
      <BoxOverlay randomHex={props.randomHex} del={props.del} />
    </div>
  );
};

export default randHexBox;

import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = props => {
  let style = props.show
    ? { transform: "translateY(0)", opacity: "1" }
    : { transform: "translateY(200vh)", opacity: "0" };
  return (
    <div className={classes.Backdrop} style={style} onClick={props.close} />
  );
};

export default backdrop;

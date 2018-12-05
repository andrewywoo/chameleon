import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = props => {
  let style = props.show
    ? { transform: "translateY(0)", opacity: "1" }
    : { transform: "translateY(200vh)", opacity: "0" };
  return (
    <div>
      <Backdrop show={props.show} close={props.close} />
      <div className={classes.Modal} style={style}>
        {props.children}
      </div>
    </div>
  );
};

export default modal;

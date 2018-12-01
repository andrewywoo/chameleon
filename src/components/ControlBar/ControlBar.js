import React from "react";
import classes from "./ControlBar.module.css";

const controlBar = props => {
  return (
    <div className={classes.ControlBar}>
      <button onClick={props.add}>Add Another Color</button>
      <select onChange={props.switch}>
        <option value="tiled">Tiled</option>
        <option value="listed">Listed</option>
      </select>
    </div>
  );
};

export default controlBar;

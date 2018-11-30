import React from "react";
import classes from "./ControlBar.module.css";

const controlBar = props => {
  return (
    <div className={classes.ControlBar}>
      <button onClick={props.add}>Add Another Color</button>
      <select onChange={props.switch}>
        <option value="Cards">Cards</option>
        <option value="List">List</option>
      </select>
    </div>
  );
};

export default controlBar;

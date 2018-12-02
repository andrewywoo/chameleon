import React from "react";
import classes from "./NavBar.module.css";

const navBar = props => {
  return (
    <header className={classes.NavBar}>
      <div className={classes.brand}>Chameleon</div>
      <div className={classes.author}>
        by{" "}
        <span className={classes.about} onClick={props.about}>
          Andrew Woo
        </span>
      </div>
    </header>
  );
};

export default navBar;

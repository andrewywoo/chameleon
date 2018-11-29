import React from "react";
import classes from "./NavBar.module.css";

const navBar = () => {
  return (
    <header className={classes.NavBar}>
      <div className={classes.brand}>Chameleon</div>
      <div className={classes.author}>by Andrew Woo</div>
    </header>
  );
};

export default navBar;

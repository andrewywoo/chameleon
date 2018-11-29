import React from "react";
import classes from "./NavBar.module.css";

const navBar = () => {
  return (
    <header className={classes.NavBar}>
      <div className={classes.brand}>Chameleon</div>
    </header>
  );
};

export default navBar;

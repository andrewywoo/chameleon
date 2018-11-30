import React from "react";
import RandHexBox from "./RandHexBox/RandHexBox";
import classes from "./RandHexBoxList.module.css";

const randHexBoxList = props => {
  const rhbList = props.hexList.map((hex, index) => {
    return (
      <RandHexBox
        key={index}
        index={index}
        randomHex={hex.hexColor}
        delete={props.delete.bind(this, index)}
        change={props.change.bind(this, index)}
      />
    );
  });

  return <div className={classes.RandHexBoxList}>{rhbList}</div>;
};

export default randHexBoxList;

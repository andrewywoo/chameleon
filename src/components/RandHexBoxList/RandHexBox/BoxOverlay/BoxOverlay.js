import React from "react";

const boxOverlay = props => {
  return <p style={{ visibility: props.isVisible }}>{props.randomHex}</p>;
};

export default boxOverlay;

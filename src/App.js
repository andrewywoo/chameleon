import React, { Component } from "react";
import RandHexBoxList from "./components/RandHexBoxList/RandHexBoxList";
import classes from "./App.module.css";

class App extends Component {
  getColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  state = {
    randHexList: [{ hexColor: this.getColor(), visibility: "visible" }]
  };

  showHexText = index => {
    const hexList = [...this.state.randHexList];
    hexList[index].visibility === "hidden"
      ? (hexList[index].visibility = "visible")
      : (hexList[index].visibility = "hidden");
    this.setState({ randHexList: hexList });
  };

  addAnotherColor = () => {
    const addRandHex = [...this.state.randHexList];
    addRandHex.push({ hexColor: this.getColor(), visibility: "hidden" });
    this.setState({ randHexList: addRandHex });
  };

  deleteAColor = index => {
    const removeRandHex = [...this.state.randHexList];
    removeRandHex.splice(index, 1);
    this.setState({ randHexList: removeRandHex });
  };

  render() {
    return (
      <div className={classes.App}>
        <button onClick={this.addAnotherColor}>Add Another Color</button>
        <RandHexBoxList
          hexList={this.state.randHexList}
          clicked={this.deleteAColor}
          hover={this.showHexText}
        />
      </div>
    );
  }
}

export default App;

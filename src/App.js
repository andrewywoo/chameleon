import React, { Component } from "react";
import RandHexBoxList from "./components/RandHexBoxList/RandHexBoxList";
import NavBar from "./components/NavBar/NavBar";
import classes from "./App.module.css";

class App extends Component {
  getColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  state = {
    randHexList: [{ hexColor: this.getColor() }]
  };

  addAnotherColor = () => {
    const addRandHex = [...this.state.randHexList];
    addRandHex.push({ hexColor: this.getColor() });
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
        <NavBar />
        <button onClick={this.addAnotherColor}>Add Another Color</button>
        <RandHexBoxList
          hexList={this.state.randHexList}
          clicked={this.deleteAColor}
        />
      </div>
    );
  }
}

export default App;

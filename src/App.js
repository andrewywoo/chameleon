import React, { Component } from "react";
import RandHexBoxList from "./components/RandHexBoxList/RandHexBoxList";
import NavBar from "./components/NavBar/NavBar";
import ControlBar from "./components/ControlBar/ControlBar";
import classes from "./App.module.css";

class App extends Component {
  getColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

  state = {
    randHexList: [{ hexColor: this.getColor() }],
    view: "cards"
  };

  addAnotherColor = () => {
    const hexList = [...this.state.randHexList];
    hexList.push({ hexColor: this.getColor() });
    this.setState({ randHexList: hexList });
  };

  deleteAColor = index => {
    const hexList = [...this.state.randHexList];
    hexList.splice(index, 1);
    this.setState({ randHexList: hexList });
  };

  changeColor = index => {
    const hexList = [...this.state.randHexList];
    hexList[index].hexColor = this.getColor();
    this.setState({ randHexList: hexList });
  };

  switchView = event => {
    console.log("did i get here" + event.target.value);
    let value = event.target.value.toLowerCase();
    switch (value) {
      case "cards":
        this.setState({ view: "cards" });
        break;
      case "list":
        this.setState({ view: "list" });
        break;
      default:
        this.setState({ view: "cards" });
    }
  };

  render() {
    return (
      <div className={classes.App}>
        <NavBar />
        <ControlBar add={this.addAnotherColor} switch={this.switchView} />
        <RandHexBoxList
          hexList={this.state.randHexList}
          delete={this.deleteAColor}
          change={this.changeColor}
        />
      </div>
    );
  }
}

export default App;

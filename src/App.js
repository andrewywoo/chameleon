import React, { Component } from "react";
import RandHexBoxList from "./components/RandHexBoxList/RandHexBoxList";
import NavBar from "./components/NavBar/NavBar";
import ControlBar from "./components/ControlBar/ControlBar";
import classes from "./App.module.css";
import Modal from "./components/UI/Modal/Modal";
import About from "./components/UI/About/About";

class App extends Component {
  state = {
    randHexList: [{ hexColor: this.getColor() }],
    view: "tiled",
    showAbout: false
  };

  getColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  showAboutHandler = () => {
    this.setState({ showAbout: true });
  };

  closeAboutHandler = () => {
    this.setState({ showAbout: false });
  };

  addAnotherColor = () => {
    const hexList = [...this.state.randHexList];
    hexList.push({ hexColor: this.getColor() });
    this.setState({ randHexList: hexList });
  };

  deleteAColor = (e, index) => {
    if (!e) window.event.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    const hexList = [...this.state.randHexList];
    hexList.splice(index, 1);
    this.setState({ randHexList: hexList });
  };

  changeColor = (e, index) => {
    const hexList = [...this.state.randHexList];
    hexList[index].hexColor = this.getColor();
    this.setState({ randHexList: hexList });
  };

  switchView = event => {
    let value = event.target.value.toLowerCase();
    switch (value) {
      case "tiled":
        this.setState({ view: "tiled" });
        break;
      case "listed":
        this.setState({ view: "listed" });
        break;
      default:
        this.setState({ view: "tiled" });
    }
  };

  render() {
    return (
      <div className={classes.App}>
        <Modal show={this.state.showAbout} close={this.closeAboutHandler}>
          <About />
        </Modal>
        <NavBar about={this.showAboutHandler} />
        <ControlBar add={this.addAnotherColor} switch={this.switchView} />
        <RandHexBoxList
          hexList={this.state.randHexList}
          view={this.state.view}
          del={this.deleteAColor}
          change={this.changeColor}
        />
      </div>
    );
  }
}

export default App;

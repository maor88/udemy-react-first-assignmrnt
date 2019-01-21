import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Maor Avitan"
  };

  nameChangeHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput onTextChange={this.nameChangeHandler} />
        <UserOutput userName={this.state.userName} text_2="Second peregraph" />
      </div>
    );
  }
}

export default App;

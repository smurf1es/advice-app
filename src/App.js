import React, { Component, Fragment } from "react";
import axios from "axios";

// CSS Link
import "./App.css";

class App extends Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    console.log("COMPONENT MOUNTED");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(res => {
        const { advice } = res.data.slip;
        this.setState({ advice });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <Fragment>
        <div className="app">
          <div className="title">
            <h1>Advice Generator.</h1>
          </div>
          <div className="card">
            <h1 className="heading">{advice}</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

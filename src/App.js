import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import BlockContainer from "./components/BlockContainer";
import SelectContainer from "./components/SelectContainer";

class App extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="App">
        <h1>{title}</h1>
        <BlockContainer />
        <br />
        <SelectContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  title: state.title,
  allDetails: state.allDetails,
  countryData: state.countryData,
});

export default connect(mapStateToProps)(App);

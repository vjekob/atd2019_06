import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { View } from "./components/view/View";
import { store } from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View />
      </Provider>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.initializeReact = () => {
    ReactDOM.render(<App />, document.getElementById("controlAddIn"));
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("OnControlReady", []);
};

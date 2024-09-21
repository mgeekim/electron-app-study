import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h1>Hello, Electron with React!</h1>
    <p>This is a basic Electron app using React.</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

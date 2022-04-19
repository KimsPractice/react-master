import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const darkTheme = {
  bgColor: "black",
  fontColor: "white",
};

const lightTheme = {
  bgColor: "white",
  fontColor: "black",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

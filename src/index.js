import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";

import "./index.css";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#93C5FD",
    },
    primary: {
      main: "#075985",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

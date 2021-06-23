import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MuiThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#93C5FD",
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

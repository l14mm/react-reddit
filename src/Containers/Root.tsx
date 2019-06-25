import React from "react";
import AsyncApp from "./AsyncApp";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Footer";
import Header from "./Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Router, Route } from "react-router";

const theme = createMuiTheme();

export default function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Route path="/" component={AsyncApp} />
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
}

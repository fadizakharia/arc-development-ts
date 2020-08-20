import React from "react";
import Header from "./ui/header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <div>
                  <h1>Home</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/services"
              component={() => (
                <div>
                  <h1>services</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => (
                <div>
                  <h1>custom software</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => (
                <div>
                  <h1>mobile apps</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/websites"
              component={() => (
                <div>
                  <h1>websites</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/revolution"
              component={() => (
                <div>
                  <h1>revolution</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/about"
              component={() => (
                <div>
                  <h1>about</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/contact"
              component={() => (
                <div>
                  <h1>contact</h1>
                </div>
              )}
            />
            <Route
              exact
              path="/estimate"
              component={() => (
                <div>
                  <h1>estimate</h1>
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

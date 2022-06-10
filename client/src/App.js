import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import CreateListingForm from "./components/CreateListingForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/listings">
            <Listings />
          </Route>

          <Route path="/createlisting">
            <CreateListingForm />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
